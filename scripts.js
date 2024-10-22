// Função para salvar as edições no localStorage
function saveEdits() {
    localStorage.setItem("title", document.getElementById("editable-title").innerText);
    localStorage.setItem("subtitle", document.getElementById("editable-subtitle").innerText);

    localStorage.setItem("product1Title", document.getElementById("product1-title").innerText);
    localStorage.setItem("product1Description", document.getElementById("product1-description").innerText);
    localStorage.setItem("product1Price", document.getElementById("product1-price").innerText);

    localStorage.setItem("product2Title", document.getElementById("product2-title").innerText);
    localStorage.setItem("product2Description", document.getElementById("product2-description").innerText);
    localStorage.setItem("product2Price", document.getElementById("product2-price").innerText);

    localStorage.setItem("product3Title", document.getElementById("product3-title").innerText);
    localStorage.setItem("product3Description", document.getElementById("product3-description").innerText);
    localStorage.setItem("product3Price", document.getElementById("product3-price").innerText);

    localStorage.setItem("footer", document.getElementById("editable-footer").innerText);
    alert("Alterações salvas!");
}

// Função para carregar as edições salvas ao carregar a página
function loadEdits() {
    if (localStorage.getItem("title")) {
        document.getElementById("editable-title").innerText = localStorage.getItem("title");
    }
    if (localStorage.getItem("subtitle")) {
        document.getElementById("editable-subtitle").innerText = localStorage.getItem("subtitle");
    }

    if (localStorage.getItem("product1Title")) {
        document.getElementById("product1-title").innerText = localStorage.getItem("product1Title");
    }
    if (localStorage.getItem("product1Description")) {
        document.getElementById("product1-description").innerText = localStorage.getItem("product1Description");
    }
    if (localStorage.getItem("product1Price")) {
        document.getElementById("product1-price").innerText = localStorage.getItem("product1Price");
    }

    if (localStorage.getItem("product2Title")) {
        document.getElementById("product2-title").innerText = localStorage.getItem("product2Title");
    }
    if (localStorage.getItem("product2Description")) {
        document.getElementById("product2-description").innerText = localStorage.getItem("product2Description");
    }
    if (localStorage.getItem("product2Price")) {
        document.getElementById("product2-price").innerText = localStorage.getItem("product2Price");
    }

    if (localStorage.getItem("product3Title")) {
        document.getElementById("product3-title").innerText = localStorage.getItem("product3Title");
    }
    if (localStorage.getItem("product3Description")) {
        document.getElementById("product3-description").innerText = localStorage.getItem("product3Description");
    }
    if (localStorage.getItem("product3Price")) {
        document.getElementById("product3-price").innerText = localStorage.getItem("product3Price");
    }

    if (localStorage.getItem("footer")) {
        document.getElementById("editable-footer").innerText = localStorage.getItem("footer");
    }
}

// Carregar as edições ao iniciar a página
window.onload = loadEdits;
