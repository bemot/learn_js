//jQuery function
function isNumeric( obj ) {
		// parseFloat NaNs numeric-cast false positives (null|true|false|"")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		// adding 1 corrects loss of precision from parseFloat (#15100)
		return !jQuery.isArray( obj ) && (obj - parseFloat( obj ) + 1) >= 0;
    }

var a = 2;

console.log(isNumeric(a));

// map - with each element make the same operation
const array1 = [1,2,3,4];

const mapped_arr = array1.map(x => x*x);

console.log(isNumeric(mapped_arr));
console.log(mapped_arr);


