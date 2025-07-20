const url = "https://hiowsdpwrjnrcdqejrsq.supabase.co"
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhpb3dzZHB3cmpucmNkcWVqcnNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI0MDczNDYsImV4cCI6MjA2Nzk4MzM0Nn0.G1hgJsL8-HTAEg1Wbv6EMDXUPjOEweDs3UCEp0OIDmQ"

import { createClient } from "@supabase/supabase-js";

const supabase = createClient(url,key)

export default function uploadFile(file){
    const promise  = new Promise(

        (resolve, reject)=>{

            if(file == null){
                reject("Please select a file to upload");
                return;
            }

            const timeStamp = new Date().getTime();
            const fileName = timeStamp+"-"+file.name

            supabase.storage.from("images").upload(fileName,file,{
                cacheControl: "3600",
                upsert: false
            }).then(
                ()=>{
                    const publicUrl = supabase.storage.from("images").getPublicUrl(fileName).data.publicUrl;
                    resolve(publicUrl)
                }
            ).catch(
                ()=>{
                    reject("Failed to upload file");
                }
            )
            

        }

    )
    return promise;
}

