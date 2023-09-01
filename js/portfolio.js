let elemPortfolioWorks = document.querySelector('.portfolio__works');
let elemPortfolioWorks2 = document.getElementById('');
let elemLinkToGitHub;
let targetTemp = null;

elemPortfolioWorks.onmouseover = function (event) {

    let target = event.target.closest('.portfolio__work-image');

    if (target == null) {
        targetTemp = null;
        if (elemLinkToGitHub) {
            elemLinkToGitHub.remove();
            elemLinkToGitHub = null;

        }
    };

    if (targetTemp == target) return;

    if (elemLinkToGitHub) {
        elemLinkToGitHub.remove();
        elemLinkToGitHub = null;
    }

    let linkToGitHub = "#";

    for (let child of target.parentNode.children) {
        console.log(child.className);

        if (child.className == "portfolio__work-link") {
            linkToGitHub = child.getAttribute('href');

        }
        
    }

    elemLinkToGitHub = document.createElement('a');
    elemLinkToGitHub.target = "_blank";
    elemLinkToGitHub.href = linkToGitHub;
    elemLinkToGitHub.className = 'goToGitHub';
    elemLinkToGitHub.innerHTML = 'Перейти на GitHub';
    target.append(elemLinkToGitHub);
    targetTemp = target;
}

elemPortfolioWorks.mouseout = function (event) {

    if (elemLinkToGitHub) {
        elemLinkToGitHub.remove();
        elemLinkToGitHub = null;
        targetTemp = null;
    }

}