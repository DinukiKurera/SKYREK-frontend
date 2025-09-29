import { useState, useMemo } from "react";
import axios from "axios";
import Header from "../components/header";   // keep as your project's header import
import Loader from "../components/loader";   // keep as your loader import

export default function ReviewsPage() {
  const [productIdInput, setProductIdInput] = useState(""); // the search input
  const [selectedProductId, setSelectedProductId] = useState(null); // currently viewed productId (string)
  const [productInfo, setProductInfo] = useState(null); // optional product details (name, image)
  const [reviews, setReviews] = useState([]); // reviews array from backend
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [sortBy, setSortBy] = useState("newest"); // newest | oldest | highest | lowest
  const [visibleCount, setVisibleCount] = useState(5); // pagination: show more

  // helper: fetch reviews for a productId
  async function fetchReviews(productId) {
    setLoading(true);
    setError("");
    setReviews([]);
    try {
      const res = await axios.get(
        import.meta.env.VITE_BACKEND_URL + "/api/reviews/" + encodeURIComponent(productId)
      );
      const data = Array.isArray(res.data) ? res.data : [];
      setReviews(data);
      setSelectedProductId(productId);
    } catch (err) {
      console.error("fetchReviews error:", err);
      setError("Unable to load reviews. Check product ID and backend.");
    } finally {
      setLoading(false);
      setVisibleCount(5);
    }
  }

  // optional: try to load product info if you have a products API (best effort)
  // Will attempt GET /api/products/:productId then fallback to /api/products/search/:productId
  async function fetchProductInfo(productId) {
    try {
      // try exact product endpoint first
      const res1 = await axios.get(import.meta.env.VITE_BACKEND_URL + "/api/products/" + encodeURIComponent(productId));
      if (res1?.data) {
        setProductInfo(res1.data);
        return;
      }
    } catch (e) {
      // ignore and fallback
    }

    try {
      // fallback to search endpoint (returns array)
      const res2 = await axios.get(import.meta.env.VITE_BACKEND_URL + "/api/products/search/" + encodeURIComponent(productId));
      if (Array.isArray(res2.data) && res2.data.length > 0) {
        setProductInfo(res2.data[0]);
        return;
      }
    } catch (e) {
      // ignore
    }

    setProductInfo(null);
  }

  // called when user clicks Search or presses Enter
  async function handleSearch() {
    const id = productIdInput.trim();
    if (!id) return;
    setError("");
    await Promise.all([fetchProductInfo(id), fetchReviews(id)]);
  }

  // submit new review for selected product
  const [newName, setNewName] = useState("");
  const [newRating, setNewRating] = useState(5);
  const [newText, setNewText] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmitReview(e) {
    e.preventDefault();
    if (!selectedProductId) {
      setError("Select a product first (search by product ID).");
      return;
    }

    setSubmitting(true);
    try {
      const res = await axios.post(
        import.meta.env.VITE_BACKEND_URL + "/api/reviews/" + encodeURIComponent(selectedProductId),
        { name: newName, rating: Number(newRating), text: newText }
      );
      // add new review to top of list
      setReviews((r) => [res.data, ...r]);
      setNewName("");
      setNewRating(5);
      setNewText("");
      setError("");
    } catch (err) {
      console.error("submit review error:", err);
      setError("Failed to submit review.");
    } finally {
      setSubmitting(false);
    }
  }

  // computed values
  const averageRating = useMemo(() => {
    if (!reviews.length) return 0;
    const sum = reviews.reduce((s, r) => s + (Number(r.rating) || 0), 0);
    return Math.round((sum / reviews.length) * 10) / 10;
  }, [reviews]);

  // sort reviews client-side
  function getSortedReviews() {
    const copy = [...reviews];
    switch (sortBy) {
      case "newest":
        return copy.sort((a, b) => new Date(b.date) - new Date(a.date));
      case "oldest":
        return copy.sort((a, b) => new Date(a.date) - new Date(b.date));
      case "highest":
        return copy.sort((a, b) => (b.rating || 0) - (a.rating || 0));
      case "lowest":
        return copy.sort((a, b) => (a.rating || 0) - (b.rating || 0));
      default:
        return copy;
    }
  }

  // small UI helpers
  function renderStars(value) {
    const v = Math.round(value);
    return (
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className={i < v ? "text-yellow-500" : "text-gray-300"}>
            ★
          </span>
        ))}
        <span className="text-sm text-gray-600 ml-2">({value})</span>
      </div>
    );
  }

  function initials(name) {
    if (!name) return "U";
    const parts = name.trim().split(/\s+/);
    return (parts[0][0] || "U") + (parts[1] ? parts[1][0] : "");
  }

  // visible reviews (pagination)
  const sorted = getSortedReviews();
  const visibleReviews = sorted.slice(0, visibleCount);

  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header />
      <div className="mt-20 px-10">
      {/* Search area */}
      <div className="w-full h-[110px] flex items-center justify-center bg-white shadow-sm px-4">
        <div className="flex items-center gap-3">
          <input
            value={productIdInput}
            onChange={(e) => setProductIdInput(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter") handleSearch(); }}
            placeholder="Search reviews by product ID (e.g. COSM001)"
            className="w-[420px] h-[44px] border border-gray-300 rounded-lg p-3 outline-none"
          />
          <button
            onClick={handleSearch}
            className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
            
          >
            Search
          </button>

          <button
            onClick={() => {
              setProductIdInput("");
              setSelectedProductId(null);
              setProductInfo(null);
              setReviews([]);
              setError("");
            }}
            className="px-4 py-2 rounded-lg border border-gray-300 text-sm"
          >
            Clear
          </button>
        </div>
      </div>

      {/* Selected product summary */}
      <div className="w-full p-6 bg-[#fafafa]">
        {loading ? (
          <div className="flex justify-center items-center h-[220px]"><Loader /></div>
        ) : selectedProductId ? (
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-6 mb-4">
              <div className="w-[100px] h-[100px] rounded-lg bg-white flex items-center justify-center overflow-hidden border">
                {/* product image if available, else show productId */}
                {productInfo?.image ? (
                  <img src={productInfo.image} alt={productInfo?.name || selectedProductId} className="w-full h-full object-cover" />
                ) : (
                  <div className="text-lg font-semibold">{selectedProductId}</div>
                )}
              </div>
              <div>
                <div className="text-xl font-semibold">
                  {productInfo?.name || `Product ID: ${selectedProductId}`}
                </div>
                <div className="mt-1 text-sm text-gray-600">{reviews.length} review(s)</div>
                <div className="mt-2">{renderStars(averageRating)}</div>
              </div>

              <div className="ml-auto flex items-center gap-3">
                <label className="text-sm text-gray-600">Sort:</label>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="border rounded px-2 py-1">
                  <option value="newest">Newest</option>
                  <option value="oldest">Oldest</option>
                  <option value="highest">Highest rating</option>
                  <option value="lowest">Lowest rating</option>
                </select>
              </div>
            </div>

            {/* Reviews list */}
            {error && <div className="text-red-600 mb-3">{error}</div>}

            {reviews.length === 0 ? (
              <div className="text-center text-gray-500 py-12">No reviews for this product yet.</div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {visibleReviews.map((r) => (
                    <div key={r._id} className="bg-white p-4 rounded-lg shadow-sm border">
                      <div className="flex items-start gap-3">
                        <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center text-pink-700 font-semibold">
                          {initials(r.name)}
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <div className="font-medium">{r.name}</div>
                              <div className="text-xs text-gray-500">{new Date(r.date).toLocaleDateString()}</div>
                            </div>
                            <div className="text-yellow-500 font-semibold">{renderStars(r.rating)}</div>
                          </div>
                          <div className="mt-2 text-gray-800">{r.text}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {visibleCount < reviews.length && (
                  <div className="flex justify-center mt-6">
                    <button onClick={() => setVisibleCount((c) => c + 5)} className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300">
                      Load more
                    </button>
                  </div>
                )}
              </>
            )}

            {/* Add Review Form */}
            <div className="mt-8 bg-white p-4 rounded-lg border">
              <h3 className="font-bold mb-5">Write a Review</h3>
              <form onSubmit={handleSubmitReview} className="flex flex-col gap-3">
                <input required placeholder="Your name" value={newName} onChange={(e) => setNewName(e.target.value)} className="border rounded px-3 py-2" />
                <select value={newRating} onChange={(e) => setNewRating(e.target.value)} className="border rounded px-3 py-2 w-[160px]">
                  <option value={5}>5 - Excellent</option>
                  <option value={4}>4 - Good</option>
                  <option value={3}>3 - Average</option>
                  <option value={2}>2 - Poor</option>
                  <option value={1}>1 - Terrible</option>
                </select>
                <textarea required rows={4} placeholder="Your review" value={newText} onChange={(e) => setNewText(e.target.value)} className="border rounded px-3 py-2"></textarea>
                <div className="flex gap-3">
                  <button disabled={submitting} type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
                    {submitting ? "Submitting..." : "Submit"}
                  </button>
                  <button type="button" onClick={() => { setNewName(""); setNewRating(5); setNewText(""); }} className="px-4 py-2 border rounded">Reset</button>
                </div>
              </form>
            </div>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto text-center py-12 text-gray-600">
            Search a product ID above to load its reviews (e.g. <span className="font-mono">COSM001</span>)
          </div>
        )}
      </div>
      </div>
    </div>
  );
}
