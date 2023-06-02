// Projects
// Create a recursive function

const main = function counter(i) {
    console.log(i);
    if (i < 100) {
        return counter(i + 5);
    }
}
main(5);


// Set timeout order
const one = () => console.log('one');
const two = () => console.log('two');
const three = () => {
    console.log('three');
    one();
    two();
}
// three();

const four = () =>{
    console.log('four');
    setTimeout(one,10000);
    three();
    }

    four();
