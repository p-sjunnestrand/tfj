export function showNewScreen(screen) {
    if(screen.children.length){
        while(screen.firstChild){
            screen.firstChild.remove();
        }
    }
}