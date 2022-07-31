// na pritisak dugmeta pokrece se sledeca funkcija
function dodajObavezu() {
    // uzimamo vrednost koja se nalazi u formi(to je ono sto smo ukucali)
    let obaveza = document.querySelector('#input').value;
    // pravimo novi element
    let novi_el = document.createElement('div');
    novi_el.classList = 'obaveze';
    // dodeljujemo mu vrednost onoga sto smo ukucali u formu
    novi_el.innerHTML = `${obaveza} <button style="padding: 5px 10px; background-color: rgb(80, 51, 110); color: rgb(31, 1, 60); border: 2px solid rgb(41, 11, 70);" class="delete">Ukloni</button><hr>`;
    // smestamo ga na dno container-a
    let dodateObaveze = document.querySelector('.jedna-obaveza');
    dodateObaveze.appendChild(novi_el);
    
    // izbacujemo element
    let current_tasks = document.querySelectorAll('.delete');
        for(let i=0; i<100; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
}