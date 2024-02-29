function changeImage(){
    const html = document.documentElement;
    html.classList.toggle("light")

    var imagem = document.querySelector("#profile")
    var btn = document.getElementById("btnStyle")
    var dt = document.getElementById("data")

    var registro = new Date()

    dt = formatarData(registro)

    if(html.classList.contains("light")){
        imagem.setAttribute("src", "https://media1.tenor.com/m/zTEMR3Ye-n0AAAAC/ditto-no-way.gif");
        document.getElementById("data").textContent = formatarData(registro);
        btn.style.color = "lightgreen";
        btn.style.borderColor = "lightgreen";
    }else{
        imagem.setAttribute("src", "https://steamuserimages-a.akamaihd.net/ugc/858349365846766768/1F278EF4CA10E0F399B910FD625D45532D92889B/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false");
        document.getElementById("data").textContent = formatarData(registro);
        btn.style.color = "lightpink";
        btn.style.borderColor = "lightpink";
    }
}

function formatarData(item){
    var options = {
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
    }

    return item.toLocaleString("ja-JP", options)
}