export const Episode12 = () => {


    // APPROACH WITH FETCH TO GRAB CSV
    /* 
        fetch(url).then(res => {
            res.text().then(text => {
                console.log(text)
            });
        }); 
    */

    // APPROACH WITH ASYNC AWAIT
    const fetchCSV = async (url) => {
        const res = await fetch(url);
        return await res.text();
        
    } 
    const csvUrl = "https://gist.githubusercontent.com/JarvisDRaymond/783b2f60194298b428788cd6e266f0f2/raw/bcd67b18089fabf42fa4df43bc48b9432f1e7a22/CssColorNames.csv";
    fetchCSV(csvUrl).then(text=>{
        console.log(text)
    });

    return (<>
        <h1>Hello Episode 12 & 13 </h1><a href="https://www.youtube.com/watch?v=8tJV3jMHyEQ">https://www.youtube.com/watch?v=8tJV3jMHyEQ</a>
        <br /><a href="https://www.youtube.com/watch?v=1UBraY8Z7uI">https://www.youtube.com/watch?v=1UBraY8Z7uI</a>
        <p>
            <a href="https://gist.githubusercontent.com/JarvisDRaymond/783b2f60194298b428788cd6e266f0f2/raw/bcd67b18089fabf42fa4df43bc48b9432f1e7a22/CssColorNames.csv">https://gist.githubusercontent.com/JarvisDRaymond/783b2f60194298b428788cd6e266f0f2/raw/bcd67b18089fabf42fa4df43bc48b9432f1e7a22/CssColorNames.csv</a>
        </p>

        <h2>Loading and Parsing CSV Data</h2>
    </>)
}