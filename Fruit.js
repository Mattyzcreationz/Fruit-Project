const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
const Selected = document.querySelector('.SelectedList ul');
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

Img.src = 

function useSuggestion(e) {
//This Function is targeting the event and the Tag Name which will be choosen
/*While then the suggestion in theory will display none once the thing is complete. */

if(e.target.tagName === 'LI'){
    input.value = e.target.textContent;
    suggestions.computedStyleMap.display = 'none'; 
}
}

//New Funtion type becasue it regarding a new type of funtion and button 
/*Purpose:
1. Submition button, once the button is used connected the current Search funtion this will develope the fruit selected and information connected to the frujit choosen
2. Frist shown will be an image, and an bout button in the top righ corner of the image.
3. Once click the about image then this will continue to display Information connected to the fruit name and image. */

//FruitSelected
class fruitResults{
    construction(imagePath, caption, label){
        this.imagePath = imagePath;
        this.caption = caption;
        this.label = label
    }
}

function fruitDetails(search) {
const DataContainer = [
    //0 is Banana
    new fruitResults("C:\Users\matty\Desktop\Fruit Image\download (1).jpg", 
"Bananas have roots in Southeast Asia, spreading to Africa by 500 AD. In the 15th century, Portuguese explorers introduced them to the Americas. The fruit's convenience, sweetness, and high nutritional value quickly made it a global favorite.", "Banana"),
    new fruitResults("C:\Users\matty\Desktop\Fruit Image\download (8).jpg", "Coconuts have a tropical origin and are thought to have spread via ocean currents. Found in coastal regions worldwide, they've been utilized for food, water, and material for centuries. Known for their versatility, coconuts offer milk, oil, and flesh, becoming essential in many cuisines and industries.", "Coconut"),
    new fruitResults("C:\Users\matty\Desktop\Fruit Image\Fruit Image.jpg","Apples trace back to ancient times, with origins in Central Asia. Cultivated for millennia, they traveled through trade routes to Europe and eventually to North America. Their diverse varieties, rich symbolism, and nutritional value have made them a globally cherished fruit in various cultures.","apple"),
    new fruitResults("C:\Users\matty\Desktop\Fruit Image\download (13).jpg","Strawberries have ancient roots in Europe and North America, enjoyed by ancient Romans and Native Americans. Cultivation methods advanced in the 18th century, leading to larger, sweeter varieties. Their popularity soared due to their juicy, versatile nature, becoming a global favorite in desserts and salads.","Strawberry"),
    new fruitResults("C:\Users\matty\Desktop\Fruit Image\OIP (54).jpg","Raspberries have ancient roots, with evidence of their consumption dating back to prehistoric times. Widely grown in Europe, they gained popularity in the 17th century. Their delicate, sweet-tart flavor and use in culinary creations and jams make them a beloved berry globally.","Raspberry"),
    new fruitResults("C:\Users\matty\Desktop\Fruit Image\OIP (59).jpg","Kumquats have roots in China, historically cultivated for centuries. Introduced to Europe and the Americas in the 19th century, they're appreciated for their unique eating style—the sweet peel and tangy flesh are enjoyed together. These tiny citrus fruits gained popularity for their distinctive flavor and culinary versatility.","Kumquat"),
    new fruitResults("C:\Users\matty\Desktop\Fruit Image\OIP (5).jpg", "Dates have ancient origins in the Middle East, cultivated for over 6,000 years. They were crucial in the diets of ancient civilizations. Initially grown in Iraq, they spread through North Africa and Spain. High in nutrients, dates are revered for their sweetness and are a cultural staple worldwide.","Date"),
    new fruitResults("C:\Users\matty\Desktop\Fruit Image\OIP (30).jpg", "Mangoes have a long history, originating in South Asia over 4,000 years ago. They spread to other tropical regions via trade routes. Revered for their deliciously sweet flavor and rich, creamy texture, mangoes are celebrated globally in various cuisines, desserts, and beverages.","Mango"),
    new fruitResults("C:\Users\matty\Desktop\Fruit Image\OIP (6).jpg","Dragon fruit, native to Central America, was historically cultivated by the Aztecs. Later, it spread to Southeast Asia. In the 19th century, it made its way to other tropical regions. Known for its vibrant appearance and mild taste, it's prized for its antioxidants and exotic appeal.","Dragonfruit"),
    new fruitResults("C:\Users\matty\Desktop\Fruit Image\download (9).jpg", "Cranberries have a long history in North America, used by Native Americans for food and medicine. Pilgrims learned about them in the 17th century. Cultivation began in the 19th century, leading to their widespread use in sauces, juices, and various culinary delights.","Cranberry"),
    new fruitResults("C:\Users\matty\Desktop\Fruit Image\OIP (40).jpg","Tangerines originated in Southeast Asia and were named after Tangier, Morocco, a port from where they were shipped to Europe in the 19th century. Renowned for their easy peeling and sweet flavor, they quickly became a beloved citrus fruit globally.","Tangerine"),
    new fruitResults("C:\Users\matty\Desktop\Fruit Image\download (7).jpg","Cherries have ancient origins in Asia Minor and were enjoyed by the Greeks and Romans. They spread through Europe, and colonists introduced them to North America in the 17th century. Prized for their sweetness, cherries are celebrated in cuisines worldwide and are a symbol of summer.","Cherry"),
    new fruitResults("C:\Users\matty\Desktop\Fruit Image\download (3).jpg", "The term `'berry'` is botanical and encompasses various small, pulpy fruits, including strawberries, raspberries, and blackberries. They've been consumed for centuries worldwide, prized for their sweetness, versatility, and health benefits, often used in desserts, jams, and as fresh snacks.","Berry"),
    new fruitResults("C:\Users\matty\Desktop\Fruit Image\OIP (29).jpg", " Indigenous to Europe, blackberries have a long history of medicinal use, dating back to ancient Greece. They were highly valued for their health benefits and rich flavor. Cultivation expanded in the 19th century, contributing to their widespread popularity today.","BlackBerry"),
    new fruitResults("", "Native to North America, blueberries were a staple in Native American diets. Their cultivation grew in the early 20th century, leading to improved varieties and increased consumption due to their antioxidant-rich profile.", "BlueBerry"),
    new fruitResults("C:\Users\matty\Desktop\Fruit Image\download (2).jpg", "Historically used in Europe for medicinal purposes, bilberries were known for their potential benefits to eye health. They gained popularity in traditional medicine and folklore for their purported vision-enhancing properties.", "Bilberry"),
    new fruitResults("C:\Users\matty\Desktop\Fruit Image\OIP (41).jpg", "Tracing back to ancient China, oranges symbolized prosperity and were valued for their freshness. Their cultivation spread to the Mediterranean, where they became emblematic of health and abundance.", "Orange"),
    new fruitResults("C:\Users\matty\Desktop\Fruit Image\OIP.jpg", "Native to China, peaches were associated with longevity and luck. They were revered for their delicate flavor and became a symbol of immortality and beauty in East Asian cultures.", "Peach"),
    new fruitResults("C:\Users\matty\Desktop\Fruit Image\OIP (45).jpg", "Cultivated for millennia, pears symbolized immortality and beauty in East Asian cultures. Their cultivation methods evolved over time, resulting in various delicious and versatile pear varieties.", "Pear"),
    new fruitResults("", "A sacred fruit in Mediterranean cultures, olives symbolized peace and abundance. They were crucial in ancient Mediterranean civilizations and remain a culinary staple globally.", "Olive"),
    new fruitResults("", "A hybrid of mandarin, clementines were discovered by a priest in Algeria and were named after him. They gained popularity for their sweet, easy-to-peel nature.", "Clementine"),
    new fruitResults("","With ancient origins in China, mandarins symbolized good fortune and happiness. They've been cultivated for centuries and are appreciated for their sweet, citrusy taste.","Mandarine"),
    new fruitResults("", " Known since ancient times, mulberries were used to feed silkworms for silk production. They have a sweet-tart flavor and were historically valued for various medicinal properties.", "Mulberry"),
    new fruitResults("", "Indigenous to West Africa, miracle fruit gained attention for its ability to alter taste perception, turning sour foods sweet. It has been used for centuries for this unique quality.", "Miracle fruit"),
    new fruitResults("", "Developed in Oregon, marionberries are a hybrid of blackberry and raspberry, known for their unique tartness and exceptional flavor profile.", "MarionBerry"),
    new fruitResults("", "Tracing back to ancient Egypt, melons were used in religious ceremonies and as currency. They gained popularity for their refreshing, sweet taste and hydrating qualities.", "Melon"),
    new fruitResults("", "Hailing from Southeast Asia, mangosteens earned the title `queen of fruits` for their exquisite taste and reputed health benefits, gaining popularity globally.", "Mangosteen"),
    new fruitResults("", "Originating from China, lychees have a long history, prized for their sweet, fragrant flesh, and are often enjoyed fresh or in desserts.", "Lychee"),
    new fruitResults("", "With ancient roots in Asia, lemons are renowned for their tangy, acidic flavor, widely used in culinary dishes and beverages globally.", "Lemon"),
    new fruitResults("", "Originating from Southeast Asia, limes offer a zesty, citrusy taste, essential in various cuisines and popular in beverages like cocktails.", "Lime"),
    new fruitResults("", "Native to Asia, longans resemble lychees and are cherished for their succulent, sweet flesh, commonly consumed fresh or dried.", "Longan"),
    new fruitResults("", "Originating from China, kiwis feature tangy-sweet green flesh with edible seeds, valued for their unique taste and nutritional benefits.", "KiwiFruit"),
    new fruitResults("", "Essential in gin production, juniper berries impart a distinct piney flavor to the spirit, prized for their aromatic qualities.", "JuniperBerry"),
    new fruitResults(""," Found in South Asia, jambuls, or Java plums, offer a mildly sweet taste and are enjoyed fresh or in culinary preparations.","Jambul"),
    new fruitResults("", " Hailing from South Asia, jackfruits are large, sweet, and used in various savory and sweet dishes due to their unique flavor and texture.", "Jackfruit"),
    new fruitResults("", " Indigenous to Brazil, jabuticabas grow on tree trunks, featuring a tart, grape-like taste, often used in jellies or enjoyed fresh.", "Jabuticaba"),
    new fruitResults("", "Wild berries in North America, huckleberries have a sweet-tart flavor, prized in jams, pies, and desserts.", "Huckleberry"),
    new fruitResults("", "Originating from Central America, guavas have a tropical, sweet taste and are consumed fresh or used in various culinary applications.", "Guava"),
    new fruitResults("", "Native to cold regions, honeyberries have a sweet-tart taste, resembling elongated blueberries, enjoyed fresh or in preserves.", "HoneyBerry"),
    new fruitResults("", "Cultivated for centuries, figs have a sweet, seedy interior, commonly eaten fresh or dried as a snack or in desserts.", "Fig"),
    new fruitResults("", " From South America, feijoas have an aromatic taste akin to a blend of pineapple and guava, used fresh or in jams and beverages.", "Fejioa"),
    new fruitResults("", "Indigenous to Europe, gooseberries have a tart taste and are often used in jams, pies, and desserts.", "Gooseberry"),
    new fruitResults("", " Cultivated since ancient times, grapes offer a wide array of flavors and are consumed fresh or used in winemaking and culinary dishes.", "Grape"),
    new fruitResults("", "Grapes dried naturally, enjoyed as a sweet snack or used in various culinary recipes for their concentrated flavor.", "Raisin"),
    new fruitResults("", "Citrus fruit known for its tangy-sweet taste, high vitamin content, and often eaten fresh or in juices.", "GrapeFruit"),
    new fruitResults("", "Southeast Asian fruit with a pungent aroma and creamy texture; either loved or disliked for its strong smell and unique taste.", "Durain"),
    new fruitResults("", "Small, dark berries rich in antioxidants, often used in jams, syrups, or wine due to their tart flavor.", "Elderberry"),
    new fruitResults("", "Tropical fruit with sweet, creamy flesh often eaten fresh, recognized for its custard-like texture and flavor.", "Custard Apple"),
    new fruitResults("", "Mild-flavored, watery fruit often used in salads, sandwiches, or enjoyed fresh as a hydrating snack.", "Cucumber"),
    new fruitResults("", " Tart, red berries commonly used in juices, sauces, or dried for snacks; known for their health benefits.", "Craberry"),
    new fruitResults("", "Small, tart berries used in jams, jellies, or baked goods for their vibrant flavor.", "Currant"),
    new fruitResults("", "Hybrid fruit combining raspberry, blackberry, and loganberry flavors; used in jams and desserts.", "Boysenberry"),
    new fruitResults("", "Dark berries with a strong, tart taste often used in juices, jams, or desserts.", "Blackcurrant"),
    new fruitResults("", "Stone fruit with a sweet-tart taste, enjoyed fresh or dried as a snack, and used in various culinary dishes.", "Apricot"),
    new fruitResults("", "Smooth-skinned variety of peach with sweet flesh, commonly eaten fresh or used in desserts.", "Nectarine"),
    new fruitResults("", " Small, tropical fruit with a tangy-sweet taste, often used in preserves or consumed fresh where available.", "Nance"),

    //Fruit Formate
    /* example Strawberries have ancient roots in Europe and North America, enjoyed by ancient Romans and Native Americans. Cultivation methods advanced in the 18th century, leading to larger, sweeter varieties. Their popularity soared due to their juicy, versatile nature, becoming a global favorite in desserts and salads.
     */
];
}

const test = 'https://www.bing.com/ck/a?!&&p=5c9ef68a81ae7acaJmltdHM9MTcwMzk4MDgwMCZpZ3VpZD0xYTg0YTNhMi1mYzM0LTZhOTYtMWRmZi1iMDcxZmQxODZiM2YmaW5zaWQ9NTcxMw&ptn=3&ver=2&hsh=3&fclid=1a84a3a2-fc34-6a96-1dff-b071fd186b3f&u=a1L2ltYWdlcy9zZWFyY2g_cT1mcmVlIGltYWdlIG9mIGFwcGwmRk9STT1JUUZSQkEmaWQ9QjAxQ0JERDJGNUI3QTk5QThEQjRBQjBGRDlBNkVGNUIwOUEzNTgxRg&ntb=1';


suggestions.addEventListener('click', useSuggestion);   
input.addEventListener('keyup', searchHandler);
