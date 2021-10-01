fetch('http://api.quotable.io/random')
.then(data => data.json())
.then(Quotedata =>{
    const Quotetext = Quotedata.content ;
    const QuoteElement = document.getElementById('QuoteElement');
    QuoteElement.innerHTML = Quotetext ;
})