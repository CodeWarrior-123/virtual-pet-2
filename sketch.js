var dog, sadDog, happyDog, database;
var foodS, foodStock;
var fedTime, lastFed;
var feed, addFood;
var foodObj, food;

function preload() {
    sadDog = loadImage("Images/Dog.png");
    happyDog = loadImage("Images/happy dog.png");
    bottleImg = loadImage('Images/Milk.png')
}

function setup() {
    database = firebase.database();
    createCanvas(1000, 400);

    foodObj = new Food();



    dog = createSprite(800, 200, 150, 150);
    dog.addImage(sadDog);
    dog.scale = 0.15;

    feed = createButton("Feed the dog");
    feed.position(700, 95);
    feed.mousePressed(feedDog);

    addFood = createButton("Add Food");
    addFood.position(800, 95);
    addFood.mousePressed(addFoods);

}

function draw() {
    background(46, 139, 87);
    foodObj.display();
    getFoodStock();
    updateFeedTime();
    drawSprites();
}

function getFoodStock() {
    var food1 = database.ref('FoodStock')
    food1.on("value", function (data) {
        food = data.val();
    })
}



//function to update food stock and last fed time
function feedDog() {
    dog.addImage(happyDog);
    food--
    foodObj.updateFoodStock(food);
    foodObj.getFoodStock()
    foodObj.display()
}

//function to add food in stock
function addFoods() {
    dog.addImage(sadDog);
    food++;
    foodObj.updateFoodStock(food);
    foodObj.getFoodStock()
    foodObj.display();
}

function updateFeedTime(){
    database.ref('FeedTime').on("value", function (data) {
    lastFed = data.val();
    });
    
        fill(255, 255, 254);
        textSize(15);
        if (lastFed >= 12) {
            text("Last Feed : " + lastFed % 12 + " PM", 350, 30);
        } else if (lastFed == 0) {
            text("Last Feed : 12 AM", 350, 30);
        } else {
            text("Last Feed : " + lastFed + " AM", 350, 30);
        }
        
}

