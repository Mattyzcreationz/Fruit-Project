const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];

    /*We have an originial array, of fruit. onces an input the str in filled
    Simply make a fortloop that will iteraite the list...
    Simplying using filter and includes. Filter inlcudes.*/
    
    //Create an iteration that we will be able to call through. in order to iterate throught the wactual string
     
    results = fruit.filter(fruitChar => fruitChar.includes(str));

	// TODO

	return results;
}

function searchHandler(e) {
    /*Create simple iteration that will count the amunt of results
    withi the fruits and this will allow for the iteration to find the mos 
    simimlar letter withint he list.*/
    
    /*Suggestions This si the data holder. */
    //Elements we need to create are Li to the ul as children within

    const inputVal = e.target.value.trim();
    const results =  search(inputVal);
    suggestions.innerHTML = '';
    
    results.forEach((result) => {
        const MenuOptions = document.createElement('li');
         MenuOptions.setAttribute('suggestions');
         MenuOptions.textContent = results[character];
         const tempChar = document.querySelector('.suggestions');
         tempChar.appendChild(MenuOptions);
     }); 
     suggestions.computedStyleMap.display = results.length > 0 ? 'block' : 'none';

    
}

function showSuggestions(results, inputVal) {

}

function useSuggestion(e) {
/*I need to each one of tehse results in order cto complete the search bar
 */
if(e.target.tagName === 'LI'){
    input.value = e.target.textContent;
    suggestions.computedStyleMap.display = 'none'; 
}

}

suggestions.addEventListener('click', useSuggestion);   
input.addEventListener('keyup', searchHandler);