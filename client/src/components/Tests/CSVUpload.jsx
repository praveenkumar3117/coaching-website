import React from 'react'
import { useState, useEffect } from 'react'
import { storage } from '../../firebase'
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage'
import { v4 as uuidv4 } from 'uuid';
// Helper code for uploading CSV file in firebase

const CSVUpload = () => {

    const [CSV, setCSV] = useState(null)

    const sendDATA = (URL)=>{
        console.log(URL)
    }

    const uploadCSV = () => {
        if (CSV == null) {
            return;
        }
        const CSVref = ref(storage,`CSV/${CSV.name + uuidv4()}`)
        uploadBytes(CSVref,CSV).then(async(snap)=>{
            //console.log(snap)
            const URL = await getDownloadURL(CSVref)
            sendDATA(URL)
        })
    }

    return (
        <div className='m-32'>
            <input type="file" onChange={(e) => { setCSV(e.target.files[0]) }} />
            <button onClick={uploadCSV} className='text-blue-900'>Upload CSV</button>
        </div>
    )
}

export default CSVUpload