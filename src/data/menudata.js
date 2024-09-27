// Veg Appetizers
import appetizers from '../assets/icons/appetizers.svg'
import vegcurry from '../assets/icons/curry.svg'
import nonvegcurry from '../assets/icons/nonvegcurry.svg'
import noImage from '../assets/images/noImage1.png'
const vegAppetizers = [
    {
        name: "CRISPY CORN",
        description: "Sweet corn kernels fried to a golden crisp, tossed with spices. A crunchy and tasty snack.",
        price: "9",
        img: "https://thumbs.dreamstime.com/b/crispy-fried-corn-chatpata-starter-snack-india-served-bowl-selective-focus-kernels-pakora-188483238.jpg",
        recommended: true,
        containsGluten: true,
        containsNuts: false,
        vegan: true,
        veg: true,
    },
    {
        name: "POTATO TORNADO",
        description: "Spiral-cut potatoes fried until crispy,  seasoned with spices.",
        price: "9",
        img: "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipe%20Ramp%20Up%2F2021-11-Spiral-Potatoes%2Fspiral-potato",
        recommended: false,
        containsGluten: false,
        containsNuts: false,
        vegan: true,
        veg: true,
    },
    {
        name: "VEG BULLET",
        description: "Spicy vegetable fritters, crispy on the outside  and tender inside.",
        price: "9",
        img: "https://img-global.cpcdn.com/recipes/330cdab33f73fee5/680x482cq70/veg-bullets-recipe-main-photo.jpg",
        recommended: true,
        containsGluten: false,
        containsNuts: true,
        vegan: false,
        veg: true,
    },
    {
        name: "SWEET POTATO FRIES",
        description: "Crispy and golden sweet potato fries, lightly  seasoned.",
        price: "9",
        img: "https://www.cookingclassy.com/wp-content/uploads/2021/10/baked-sweet-potato-fries-12.jpg",
        recommended: false,
        containsGluten: false,
        containsNuts: false,
        vegan: true,
        veg: true,
    },
    {
        name: "Fries",
        description: "Crispy, golden fries, perfectly seasoned and  served hot, ideal for snacking or as a side.",
        price: "9",
        img: "https://media.istockphoto.com/id/1402860995/photo/pile-of-delicious-fried-potatoes-with-salt-against-black-background.jpg?s=612x612&w=0&k=20&c=UpMyVlhPv9Lrd1SllYoAGPyyCCPGL_4TyLDHCrUszKM=",
        recommended: false,
        containsGluten: false,
        containsNuts: false,
        vegan: false,
        veg: true,
    },
    {
        name: "VEG CULET",
        description: "Crispy vegetable patties made from mixed  veggies and spices. ",
        price: "15",
        img: "https://www.cookwithmanali.com/wp-content/uploads/2021/04/Veg-Cutlet-500x500.jpg",
        recommended: true,
        containsGluten: false,
        containsNuts: true,
        vegan: false,
        veg: true,
    },
    {
        name: "PANEER PAKORA",
        description: "Soft paneer cubes dipped in spiced chickpea  batter and deep-fried to golden perfection.",
        price: "15",
        img: "https://myfoodstory.com/wp-content/uploads/2020/08/Paneer-Pakora-Recipe-2-Ways-3.jpg",
        recommended: false,
        containsGluten: false,
        containsNuts: false,
        vegan: false,
        veg: true,
    },
    {
        name: "ALOO PAKORA",
        description: "Sliced potatoes dipped in spiced chickpea  batter and deep-fried to crispy perfection.",
        price: "15",
        img: "https://www.spiceupthecurry.com/wp-content/uploads/2013/07/aloo-pakora-1.jpg",
        recommended: false,
        containsGluten: false,
        containsNuts: false,
        vegan: true,
        veg: true,
    },
    {
        name: "CHILLI GARLIC BROCCOLI",
        description: "Broccoli stir-fried with spicy chili and garlic.",
        price: "15",
        img: "https://images.getrecipekit.com/20230105215339-shutterstock_2228954923w.jpg?class=16x9",
        recommended: true,
        containsGluten: true,
        containsNuts: false,
        vegan: true,
        veg: true,
    }
]

// Non-Veg Appetizers
const nonVegAppetizers = [
    {
        name: "KOLI CHIPS",
        description: "Crispy and flavorful fried chicken chips, seasoned  with secretspices. A crunchy snack not worth missing",
        price: "19",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWkqqe0ibb56n_9uK1YurKly-ZwKSkFYr6Qg&s",
        recommended: false,
        containsGluten: true,
        containsNuts: false,
        veg: false,
    },
    {
        name: "BANGLA KODI CHIPS",
        description: "Chicken wrapped in thin cut potato and fried to perfection  Tossed in our chef’s secret mix of spices, a must try!!",
        price: "19",
        img: "https://i.ytimg.com/vi/aHA6ajrUYrQ/sddefault.jpg",
        recommended: false,
        containsGluten: true,
        containsNuts: false,
        veg: false,
    },
    {
        name: "BANG BANG CHICKEN",
        description: "Crispy chicken tossed in a spicy, tangy sauce. A bold and flavorful dish.",
        price: "19",
        img: "https://www.allrecipes.com/thmb/cGiy3zN284oHyrAHglHRLMj_GxM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/6644307-bang-bang-chicken-Diana71-1x1-1-2299f11618e24300b3a6eeb2b1dbc24d.jpg",
        recommended: true,
        containsGluten: false,
        containsNuts: false,
        veg: false,
    },
    {
        name: "CRISPY WINGS",
        description: "Juicy chicken wings fried to golden perfection, seasoned with spices. ",
        price: "19",
        img: "https://www.lifesambrosia.com/wp-content/uploads/Deep-Fried-Chicken-Wings-Recipe-Photo-11-562x848.jpg",
        recommended: false,
        containsGluten: true,
        containsNuts: false,
        veg: false,
    },
    {
        name: "CHICKEN PAKORA",
        description: "Tender chicken pieces dipped in spiced chickpea  batter and deep-fried until crispy. ",
        price: "19",
        img: "https://images.squarespace-cdn.com/content/v1/59739d0ed2b857fb9af8f717/1601849260033-A668B5YN1OJQS7H3J0TO/girija-indian-fried-chicken.jpg",
        recommended: false,
        containsGluten: false,
        containsNuts: false,
        veg: false,
    },
    {
        name: "HOT & WINGS",
        description: "Spicy chicken wings, fried to crispy perfection  and coated in a fiery sauce. ",
        price: "19",
        img: "https://www.foodandwine.com/thmb/vH_HdVoP4hB-foa7t6cc5gKdeMk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Classic-Hot-Wings-FT-BLOG0207-2ab253bb77bd4c2985c166aa258ddbbd.jpg",
        recommended: true,
        containsGluten: true,
        containsNuts: false,
        veg: false,
    },
    {
        name: "GOLDEN SHRIMP",
        description: "Crispy, golden-fried shrimp seasoned with  spices. A delectable seafood delight.",
        price: "21",
        img: "https://www.flavorquotient.com/wp-content/uploads/2016/08/Golden-Fried-Prawns-FQ-5-1-of-1.jpg",
        recommended: true,
        containsGluten: true,
        containsNuts: true,
        veg: false,
    },
    {
        name: "CRISPY SHRIMP",
        description: "Shrimp coated in a crunchy batter and fried  until golden.",
        price: "21",
        img: "https://res.cloudinary.com/hksqkdlah/image/upload/SFS_CrispyFriedShrimp-80_fdh2ne.jpg",
        recommended: false,
        containsGluten: true,
        containsNuts: false,
        veg: false,
    },
    {
        name: "GOLDEN FISH",
        description: "Crispy, golden-fried fish fillets, seasoned to  perfection. A savory and satisfying seafood dish.",
        price: "20",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReNISUGisWi41DPWp5N9sAKdB4dv3S9fzBEQ&s",
        recommended: false,
        containsGluten: true,
        containsNuts: false,
        veg: false,
    },
    {
        name: "FISH PAKORA",
        description: "Tender fish pieces dipped in spiced chickpea batter  and deep-fried until crispy. ",
        price: "20",
        img: "https://khinskitchen.com/wp-content/uploads/2022/04/fish-pakora-09.jpg",
        recommended: false,
        containsGluten: false,
        containsNuts: false,
        veg: false,
    },
    {
        name: "BANGLA FISH",
        description: "Spiced and marinated fish, fried or grilled to  perfection. ",
        price: "20",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1tKIBC2kaJgMtefDKQOR5v-0161srNOKgWA&s",
        recommended: false,
        containsGluten: true,
        containsNuts: false,
        veg: false,
    },
    {
        name: "CRISPY FISH",
        description: "Lightly battered and fried fish fillets, crispy on  the outside and tender inside. ",
        price: "20",
        img: "https://www.licious.in/blog/wp-content/uploads/2020/12/Fried-Fish-Fillet-1.jpg",
        recommended: false,
        containsGluten: true,
        containsNuts: false,
        veg: false,
    }
]

// Tandoori Appetizers
const tandooriAppetizers = [
    {
        name: "Tandoori Chicken",
        description: "Juicy, marinated chicken cooked to perfection in  a traditional clay oven, bursting with smoky flavors.",
        price: "21",
        img: "https://www.cubesnjuliennes.com/wp-content/uploads/2022/12/Tandoori-Chicken-Recipe-500x500.jpg",
        recommended: false,
        containsGluten: false,
        containsNuts: false,
        veg: false,
    }
]

// Saucy Appetizers
const saucyAppetizers = [
    {
        name: "BABY CORN",
        description: "Fresh Baby Corn battered and golden fried to perfection, tossed in your choice of sauce and  served with a salad & dip.",
        ChoiceOfGravy: "Choice of gravy: Spicy Mango | 75 | Sauce Schezwan | Honey-garlic | 65 Sauce.",
        price: "17",
        img: "https://i.pinimg.com/736x/06/06/bf/0606bf44cbe264a23414b8f1b17305d0.jpg",
        recommended: true,
        containsGluten: true,
        containsNuts: false,
        veg: true,
    },
    {
        name: "GOBI",
        description: "Fresh Gobi battered and golden fried to perfection, tossed in your choice of sauce and served with a salad & dip.",
        ChoiceOfGravy: "Choice of gravy: Spicy Mango | 75 | Sauce Schezwan | Honey-garlic | 65 Sauce.",
        price: "17",
        img: "https://rainbowplantlife.com/wp-content/uploads/2022/02/Gobi-Manchurian-cover-photo-on-white-tile-1-of-1.jpg",
        recommended: true,
        containsGluten: true,
        containsNuts: false,
        veg: true,
    },
    {
        name: "PANEER",
        description: "Fresh Paneer battered and golden fried to perfection, tossed in your choice of sauce and served with a salad & dip.",
        ChoiceOfGravy: "Choice of gravy: Spicy Mango | 75 | Sauce Schezwan | Honey-garlic | 65 Sauce.",
        price: "17",
        img: "https://sixhungryfeet.com/wp-content/uploads/2022/08/Paneer-Manchurian-7-1-480x270.jpg",
        recommended: true,
        containsGluten: true,
        containsNuts: false,
        veg: true,
    },
    {
        name: "POTATO FRIES",
        description: "Fresh potato fries and golden fried to perfection, tossed in your choice of sauce and served with a salad & dip.",
        ChoiceOfGravy: "Choice of gravy: Spicy Mango | 75 | Sauce Schezwan | Honey-garlic | 65 Sauce.",
        price: "17",
        img: "https://www.slenderkitchen.com/sites/default/files/styles/gsd-4x3/public/recipe_images/sweet-potato-fries.jpg",
        recommended: true,
        containsGluten: true,
        containsNuts: false,
        veg: true,
    },
    {
        name: "CHICKEN",
        description: "Fresh chicken battered and golden fried to perfection, tossed in your choice of sauce and served with a salad & dip.",
        ChoiceOfGravy: "Choice of gravy: Spicy Mango | 75 | Sauce Schezwan | Honey-garlic | 65 Sauce.",
        price: "19",
        img: "https://i1.wp.com/www.bharatzkitchen.com/wp-content/uploads/2020/08/Chicken65.jpg?fit=480%2C270&ssl=1",
        recommended: true,
        containsGluten: true,
        containsNuts: false,
        veg: false,
    },
    {
        name: "FISH",
        description: "Fresh fish battered and golden fried to perfection, tossed in your choice of sauce and served with a salad & dip.",
        ChoiceOfGravy: "Choice of gravy: Spicy Mango | 75 | Sauce Schezwan | Honey-garlic | 65 Sauce.",
        price: "19",
        img: "https://thespiceadventuress.com/wp-content/uploads/2015/11/5-500x375.jpg",
        recommended: true,
        containsGluten: true,
        containsNuts: false,
        veg: false,
    },
    {
        name: "SHRIMP",
        description: "Fresh shrimp battered and golden fried to perfection, tossed in your choice of sauce and served with a salad & dip.",
        ChoiceOfGravy: "Choice of gravy: Spicy Mango | 75 | Sauce Schezwan | Honey-garlic | 65 Sauce.",
        price: "19",
        img: "https://littlespicejar.com/wp-content/uploads/2017/08/30-Minute-Spicy-Shrimp-Masala-5-480x360.jpg",
        recommended: true,
        containsGluten: true,
        containsNuts: false,
        veg: false,
    },
    {
        name: "WINGS",
        description: "Fresh wings battered and golden fried to perfection, tossed in your choice of sauce and served with a salad & dip.",
        ChoiceOfGravy: "Choice of gravy: Spicy Mango | 75 | Sauce Schezwan | Honey-garlic | 65 Sauce.",
        price: "19",
        img: "https://bakerbynature.com/wp-content/uploads/2015/02/Sweet-and-Spicy-Sriracha-Chicken-Wings-0-6-500x500.jpg",
        recommended: true,
        containsGluten: true,
        containsNuts: false,
        veg: false,
    },
]

// Veg curries
const vegCurries = [
    {
        name: "DAL TADKA",
        description: "Spiced yellow lentils cooked with onions,  tomatoes, & aromatic spices, finished with  a tempering of garlic and cumin.",
        price: "21",
        img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/04/dal-tadka-recipe.jpg",
        recommended: false,
        containsGluten: false,
        containsNuts: false,
        vegan: true,
        veg: true,
    },
    {
        name: "DAL MAKHANI",
        description: "Creamy black lentils simmered with butter,  cream, and spices. A rich and comforting  Indian classic.",
        price: "21",
        img: "https://myfoodstory.com/wp-content/uploads/2018/08/Dal-Makhani-New-3-500x500.jpg",
        recommended: true,
        containsGluten: false,
        containsNuts: false,
        vegan: true,
        veg: true,
    },
    {
        name: "ALOO GOBI",
        description: "A flavorful combination of tender cauliflower florets and hearty potatoes, sautéed with aromatic spices and herbs, creating a deliciously wholesome dish that's perfect for vegetarians and vegetable lovers alike.",
        price: "21",
        img: "https://niksharmacooks.com/wp-content/uploads/2022/11/AlooGobiDSC_5234.jpg",
        recommended: false,
        containsGluten: false,
        containsNuts: true,
        vegan: true,
        veg: true,
    },
    {
        name: "CHANA MASALA",
        description: "Spiced chickpeas simmered in a tangy tomato gravy with onions and aromatic spices.",
        price: "21",
        img: "https://cdn77-s3.lazycatkitchen.com/wp-content/uploads/2020/01/easy-chana-masala-pan-768x1152.jpg",
        recommended: true,
        containsGluten: false,
        containsNuts: false,
        vegan: true,
        veg: true,
    },
    {
        name: "ALOO SAAG",
        description: "Potatoes cooked with spinach and spices in a savory, comforting curry.",
        price: "21",
        img: "https://www.kitchensanctuary.com/wp-content/uploads/2021/03/Saag-Aloo-square-FS-45.jpg",
        recommended: false,
        containsGluten: false,
        containsNuts: false,
        vegan: true,
        veg: true,
    },
    {
        name: "CHANA SAAG",
        description: "Chickpeas cooked with spinach and spices in a flavorful, hearty curry.",
        price: "21",
        img: "https://www.whatwouldcathyeat.com/wp-content/uploads/2011/02/IMG_0660spinachcurry.jpg",
        recommended: false,
        containsGluten: false,
        containsNuts: false,
        vegan: true,
        veg: true,
    },
    {
        name: "KADAI PANEER",
        description: "Cubes of paneer cooked with bell peppers, tomatoes, and spices in a spicy, flavorful sauce.",
        price: "21",
        img: "https://t3.ftcdn.net/jpg/07/08/98/24/360_F_708982461_b4FgTxJ5wt81dy1saVjkSbc8ywiL8r9e.jpg",
        recommended: true,
        containsGluten: false,
        containsNuts: true,
        vegan: false,
        veg: true,
    },
    {
        name: "PANEER BUTTER MASALA",
        description: "Cubes of cottage cheese simmered in tomato & cream sauce.",
        price: "21",
        img: "https://homecookingcollective.com/wp-content/uploads/2024/01/Butter_Paneer_LEAD_1-2-2.jpg",
        recommended: false,
        containsGluten: false,
        containsNuts: true,
        vegan: false,
        veg: true,
    },
    {
        name: "PANEER SAAG",
        description: "Cottage cheese, spinach, other greens with tomato with touch of cream.",
        price: "21",
        img: "https://healthynibblesandbits.com/wp-content/uploads/2020/01/Saag-Paneer-FF.jpg",
        recommended: true,
        containsGluten: false,
        containsNuts: false,
        vegan: false,
        veg: true,
    },
    {
        name: "KADAI SAAG",
        description: "pinach cooked with bell peppers, tomatoes, and aromatic spices in a savory, spiced sauce.",
        price: "21",
        img: vegcurry,
        recommended: false,
        containsGluten: false,
        containsNuts: true,
        vegan: false,
        veg: true,
    },
]

// Non-Veg curries
const nonVegCurries = [
    {
        name: "CHICKEN CURRY",
        description: "Boneless chicken cooked with brimming flavours and spices.",
        price: "24",
        img: "https://media.istockphoto.com/id/177126541/photo/indian-chicken-jalfrezi-curry.jpg?s=612x612&w=0&k=20&c=lOkmRiBFovpKW5FA9hn0_yXg5HOTx78Can4E3JavpFE=",
        recommended: false,
        containsGluten: false,
        containsNuts: false,
        veg: false,
    },
    {
        name: "BUTTER CHICKEN",
        description: "Masakali’s signature dish – needs no description.",
        price: "24",
        img: "https://t3.ftcdn.net/jpg/02/29/39/34/360_F_229393457_LGaJHVGBn04k84lX5tuJ9bi1FQhffUxq.jpg",
        recommended: true,
        containsGluten: false,
        containsNuts: false,
        veg: false,
    },
    {
        name: "CHICKEN SAAG",
        description: "Pureed spinach, other greens, onions, tomatoes with a touch of cream and fresh ginger.",
        price: "24",
        img: "https://thehappyfoodie.co.uk/wp-content/uploads/2023/03/Butter_Chicken.jpg",
        recommended: false,
        containsGluten: false,
        containsNuts: false,
        veg: false,
    },
    {
        name: "CHICKEN TIKKA MASALA",
        description: "Chicken tikka cooked in a masala gravy with tomatoes, onions, ginger, garlic, mixed peppers and cilantro",
        price: "24",
        img: "https://bellyfull.net/wp-content/uploads/2021/05/Chicken-Tikka-Masala-blog.jpg",
        recommended: true,
        containsGluten: false,
        containsNuts: true,
        veg: false,
    },
    {
        name: "CHICKEN KORMA",
        description: "Boneless chicken cooked with yogurt/cream and spices to produce thick sauce.",
        price: "24",
        img: "https://igav3-metcdn-com.global.ssl.fastly.net/content/uploads/sites/2/2023/08/11112603/Chicken-Korma.jpg",
        recommended: true,
        containsGluten: false,
        containsNuts: true,
        veg: false,
    },
    {
        name: "CHICKEN VINDALOO",
        description: "Chicken & potato simmered in a sour, tangy & spicy tamarind sauce.",
        price: "24",
        img: "https://niksharmacooks.com/wp-content/uploads/2022/12/Chicken-VindalooDSC_6147.jpg",
        recommended: false,
        containsGluten: false,
        containsNuts: false,
        veg: false,
    },
    {
        name: "LAMB CURRY",
        description: "Boneless lamb cooked with brimming flavours and spices.",
        price: "26",
        img: "https://sherrys-kitchen-table.co.uk/wp-content/uploads/2022/01/lamb-curry.jpg",
        recommended: true,
        containsGluten: false,
        containsNuts: false,
        veg: false,
    },
    {
        name: "LAMB SAAG",
        description: "Boneless lamb cooked with brimming flavours and spices.",
        price: "26",
        img: "https://www.thatgreenolive.com/wp-content/uploads/2023/07/Creamy-Lamb-Saag-That-Green-Olive-1.jpg",
        recommended: false,
        containsGluten: false,
        containsNuts: false,
        veg: false,
    },
    {
        name: "LAMB KORMA",
        description: "Boneless lamb cooked with a blend of spices in a creamy cashew gravy.",
        price: "26",
        img: "https://spicecravings.com/wp-content/uploads/2017/12/Lamb-Korma-New-3.jpg",
        recommended: true,
        containsGluten: false,
        containsNuts: true,
        veg: false,
    },
    {
        name: "LAMB VINDALOO",
        description: "Lamb and potato simmered in a sour, tangy and spicy tamarind gravy.",
        price: "26",
        img: nonvegcurry,
        recommended: false,
        containsGluten: false,
        containsNuts: false,
        veg: false,
    },
    {
        name: "MALABAR FISH",
        description: "Fish cooked in a rich, coconut-based curry with aromatic spices and tamarind.",
        price: "25",
        img: nonvegcurry,
        recommended: true,
        containsGluten: false,
        containsNuts: true,
        veg: false,
    },
    {
        name: "FISH MASALA",
        description: "Fish cooked in a spicy and tangy tomato-based gravy with aromatic spices.",
        price: "25",
        img: nonvegcurry,
        recommended: false,
        containsGluten: false,
        containsNuts: false,
        veg: false,
    },
    {
        name: "MALABAR SHRIMP",
        description: "Shrimp simmered in a rich, coconut-based curry with aromatic spices and tamarind.",
        price: "25",
        img: nonvegcurry,
        recommended: false,
        containsGluten: false,
        containsNuts: true,
        veg: false,
    },
    {
        name: "SHRIMP VINDALOO",
        description: "Spicy and tangy shrimp curry made with vinegar, garlic, and a blend of bold spices.",
        price: "25",
        img: nonvegcurry,
        recommended: false,
        containsGluten: false,
        containsNuts: false,
        veg: false,
    },
    {
        name: "SHRIMP SAAG",
        description: "Shrimp cooked with spinach and spices in a flavorful and creamy curry.",
        price: "25",
        img: nonvegcurry,
        recommended: false,
        containsGluten: false,
        containsNuts: false,
        veg: false,
    },

]

// Roti
const roti = [
    {
        name: "PLAIN ROTI",
        description: "",
        price: "4",
        img: noImage,
        recommended: false,
        containsGluten: false,
        containsNuts: false,
        vegan: true,
        veg: true,
    },
    {
        name: "BUTTER ROTI",
        description: "",
        price: "4",
        img: noImage,
        recommended: false,
        containsGluten: false,
        containsNuts: false,
        vegan: true,
        veg: true,
    }
]

//Naan 
const naan = [
    {
        name: "PLAIN NAAN",
        description: "",
        price: "4",
        img: noImage,
        recommended: false,
        containsGluten: true,
        containsNuts: false,
        vegan: false,
        veg: true,
    },
    {
        name: "BUTTER NAAN",
        description: "",
        price: "4",
        img: noImage,
        recommended: false,
        containsGluten: true,
        containsNuts: false,
        vegan: false,
        veg: true,
    },
    {
        name: "GARLIC NAAN",
        description: "",
        price: "5",
        img: noImage,
        recommended: false,
        containsGluten: true,
        containsNuts: false,
        vegan: false,
        veg: true,
    },
    {
        name: "HERBS NAAN",
        description: "",
        price: "6",
        img: noImage,
        recommended: false,
        containsGluten: true,
        containsNuts: false,
        vegan: false,
        veg: true,
    }
]

// Steamed Rice
const steamedRice = [
    {
        name: "PLAIN RICE",
        description: "",
        price: "7",
        img: noImage,
        recommended: false,
        containsGluten: false,
        containsNuts: false,
        vegan: true,
        veg: true,
    },
    {
        name: "PEAS PULAO",
        description: "",
        price: "12",
        img: "https://www.cookwithmanali.com/wp-content/uploads/2019/04/Matar-Pulao-Peas-Pulao-480x270.jpg",
        recommended: false,
        containsGluten: false,
        containsNuts: false,
        vegan: true,
        veg: true,
    },
    {
        name: "JEERA RICE",
        description: "",
        price: "11",
        img: noImage,
        recommended: false,
        containsGluten: false,
        containsNuts: false,
        vegan: true,
        veg: true,
    },
    {
        name: "HERBS RICE",
        description: "",
        price: "13",
        img: noImage,
        recommended: false,
        containsGluten: false,
        containsNuts: false,
        vegan: true,
        veg: true,
    }
]

// Sides
const sides = [
    {
        name: "BOONDHI RAITHA",
        description: "",
        price: "5",
        img: noImage,
        recommended: false,
        containsGluten: true,
        containsNuts: false,
        vegan: false,
        veg: true,
    },
    {
        name: "MINT CHUTNEY",
        description: "",
        price: "5",
        img: noImage,
        recommended: false,
        containsGluten: true,
        containsNuts: false,
        vegan: false,
        veg: true,
    },
    {
        name: "VEG SALAD WITH CHILLIES",
        description: "",
        price: "5",
        img: noImage,
        recommended: false,
        containsGluten: true,
        containsNuts: false,
        vegan: false,
        veg: true,
    },
    {
        name: "RAITHA",
        description: "",
        price: "5",
        img: noImage,
        recommended: false,
        containsGluten: true,
        containsNuts: false,
        vegan: false,
        veg: true,
    },
    {
        name: "SALAN",
        description: "",
        price: "5",
        img: noImage,
        recommended: false,
        containsGluten: false,
        containsNuts: true,
        vegan: false,
        veg: true,
    }
]

// Desserts
const desserts = [
    {
        name: "GULAB JAMUN",
        description: "",
        price: "5",
        img: noImage,
        recommended: false,
        containsGluten: false,
        containsNuts: false,
        vegan: false,
        veg: true,
    },
    {
        name: "RASMALAI",
        description: "",
        price: "6",
        img: noImage,
        recommended: false,
        containsGluten: false,
        containsNuts: false,
        vegan: false,
        veg: true,
    },
    {
        name: "BROWNIE WITH ICECREAM",
        description: "",
        price: "9",
        img: noImage,
        recommended: false,
        containsGluten: false,
        containsNuts: false,
        vegan: false,
        veg: true,
    },
    {
        name: "FRIED ICE CREAM",
        description: "",
        price: "9",
        img: noImage,
        recommended: false,
        containsGluten: false,
        containsNuts: false,
        vegan: false,
        veg: true,
    },
]

// Veg Biryani
const vegBiryani = [
    {
        name: "PANEER 65 BIRYANI",
        description: "Crispy paneer 65 tossed with aromatic biryani, offering a fusion of vibrant flavors in every bite.",
        price: "18",
        img: noImage,
        recommended: false,
        containsGluten: false,
        containsNuts: false,
        vegan: true,
        veg: true,
    },
    {
        name: "BUTTER PANEER",
        description: "Butter paneer and biryani unite in this luxurious dish, blending creamy richness with spiced rice.",
        price: "18",
        img: noImage,
        recommended: false,
        containsGluten: false,
        containsNuts: false,
        vegan: true,
        veg: true,
    },
    {
        name: "CHILLI PANEER BIRYANI",
        description: "Spicy chilli paneer combined with aromatic biryani rice, offering a bold and flavorful vegetarian delight.",
        price: "18",
        img: noImage,
        recommended: false,
        containsGluten: false,
        containsNuts: false,
        vegan: true,
        veg: true,
    },
    {
        name: "VEG BIRYANI",
        description: "Aromatic basmati rice layered with fresh vegetables and spices, creating a flavorful and wholesome vegetarian dish.",
        price: "18",
        img: noImage,
        recommended: false,
        containsGluten: false,
        containsNuts: false,
        vegan: true,
        veg: true,
    }
]

// Non-Veg Biryani
const nonVegBiryani = [
    {
        name: "CHICKEN DUM BIRYANI",
        description: "Tender chicken marinated in spices, slow-cooked with fragrant rice, creating an authentic, flavorful biryani experience.",
        price: "18",
        img: noImage,
        recommended: false,
        containsGluten: false,
        containsNuts: false,
        veg: false,
    },
    {
        name: "CHICKEN 65 BIRYANI",
        description: "Crispy, spicy Chicken 65 meets fragrant biryani rice for a bold and flavorful fusion dish.",
        price: "20",
        img: noImage,
        recommended: false,
        containsGluten: false,
        containsNuts: false,
        veg: false,
    },
    {
        name: "BUTTER CHICKEN BIRYANI",
        description: "Butter chicken’s creamy goodness meets fragrant biryani rice for a deliciously indulgent & satisfying dish.",
        price: "20",
        img: noImage,
        recommended: false,
        containsGluten: false,
        containsNuts: false,
        veg: false,
    },
    {
        name: "CHILLI CHICKEN BIRYANI",
        description: "Spicy chilli chicken blended with aromatic biryani rice, delivering a fiery and flavorful fusion dish.",
        price: "20",
        img: noImage,
        recommended: false,
        containsGluten: false,
        containsNuts: false,
        veg: false,
    },
    {
        name: "SHAHI GOSHT BIRYANI (MUTTON)",
        description: "Rich, tender mutton slow-cooked with aromatic spices and basmati rice for a royal biryani experience.",
        price: "",
        img: noImage,
        recommended: true,
        containsGluten: false,
        containsNuts: false,
        veg: false,
    }
]

export { vegAppetizers, nonVegAppetizers, tandooriAppetizers, saucyAppetizers, vegCurries, nonVegCurries, roti, naan, steamedRice, sides, desserts, vegBiryani, nonVegBiryani }