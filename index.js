let counter=0;
const getData = () => {
console.log(`fetchig data ${counter++}`);
};


const doSomeMagic = (fn,dl) => {
    let timer;
    return function(){
        let context = this,args=arguments;
        clearTimeout(timer);
         timer = setTimeout(()=>{
            fn.apply(context,args);
        },dl);
    }
};

const betterFunction = doSomeMagic (getData,300);