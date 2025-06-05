function afficherParcours(type) {
    const container = document.getElementById('description-container');
    const img = document.getElementById('parcours-image');
    const text = document.getElementById('parcours-text');

    let imageSrc = '';
    let description = '';

    if (type === 'lycee') {
        imageSrc = 'Colbert.jpg';
        description = 'J’étais au Lycée Colbert à Lorient, où j’ai obtenu mon bac Général avec mention.';
    } else if (type === 'iut') {
        imageSrc = 'IUT.jpg';
        description = 'J’ai poursuivi mes études à l’IUT de Lorient, en BUT Génie Industriel et Maintenance, qui m’a permis de développer mes compétences techniques.';
    } else if (type === 'ecole') {
        imageSrc = 'ENSIBS-photo.jpg';
        description = 'J’ai intégré l’ENSIBS en école d’ingénieur, où je me spécialise dans le Génie Industriel 4.0.';
    }

    img.src = imageSrc;
    text.textContent = description;
    container.style.display = 'block';
}