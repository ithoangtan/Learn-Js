//Object literals
const jerry = {
  name: "Jerry",
  run: function() {
    console.log(`${this.name} is running`);
  }
};

jerry.run();

// Tính năng mới;
// enhanced object literals
const name = "Tom";
const cat = {
  name,
  run() {
    console.log(`${this.name} is running`);
  }
};
cat.run();
