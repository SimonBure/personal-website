
function openModal(title, textFile, downloadLink) {
    document.getElementById("modal-title").textContent = title;
    
    // Charger le fichier texte via fetch()
    fetch(textFile)
        .then(response => {
            if (!response.ok) {
                throw new Error("Erreur de chargement du fichier : " + response.statusText);
            }
            return response.text();
        })
        .then(text => {
            document.getElementById("modal-description").textContent = text;
            document.getElementById("modal-description").style.display = "block"; // Afficher la description
        })
        .catch(error => {
            console.error("Erreur de chargement du fichier :", error);
            document.getElementById("modal-description").textContent = "Impossible de charger la description.";
        });

    // Gérer le lien de téléchargement
    let downloadButton = document.getElementById("modal-download");
    if (downloadLink) {
        downloadButton.href = downloadLink;
        downloadButton.style.display = "block"; // Afficher le lien
        downloadButton.textContent = "Télécharger le rapport";
    } else {
        downloadButton.style.display = "none"; // Cacher si pas de document
    }

    document.getElementById("modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}
