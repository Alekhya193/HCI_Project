@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Poppins', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

.wrapper {
    width: 370px;
}

.wrapper .title {
    background: #007bff;
    color: white;
    line-height: 2.5;
    border-radius: 5px 5px 0 0;
    text-align: center;
    font-size: 20px;
}

.wrapper .box {
    border: 1px solid #efefef;
    padding: 10px 15px;
    min-height: 400px;
    max-height: 400px;
}

.wrapper .box .item {
    display: flex;
    float: left;
    margin: 10px 0;
}

.wrapper .box .item .icon {
    background: #007bff;
    color: white;
    width: 40px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    border-radius: 50%;
}

.wrapper .box .item .msg {
    background: #007bff;
    color: white;
    border-radius: 10px;
    width: 150px;
    margin-left: 10px;
}

.wrapper .box .item .msg p {
    padding: 10px;
}

.wrapper .box .item.right {
    float: right;
}

.wrapper .box .item.right .msg {
    background: #efefef;
    color: #333;
}

.wrapper .typing-area {
    width: 100%;
    background: #efefef;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
}

.wrapper .typing-area .input-field {
    width: 100%;
    position: relative;
}

.wrapper .typing-area .input-field input {
    width: 100%;
    padding: 10px;
    border: 1px solid transparent;
    border-radius: 3px;
    outline: none;
    padding-right: 70px;
    font-family: 'Poppins', sans-serif;
    transition: 0.3s all ease;
}

.wrapper .typing-area .input-field input:focus {
    border-color: #007bff;
}

.wrapper .typing-area .input-field button {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    background: transparent;
    border: 1px solid #007bff;
    padding: 5px 10px;
    border-radius: 3px;
    color: #007bff;
    outline: none;console.log("news ya working")
    //6e8a3150a2c94a558d878fd651af6965
    
    // let source='subha-news';
    // let apiKey ='6e8a3150a2c94a558d878fd651af6965';
    
    let newsaccordion = document.getElementById('newsaccordion');
    
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&apiKey=6363d6770b39424ba158fd1a484af848`, true);
    
    xhr.onload = function () {
        if (this.status === 200) {
            let json = JSON.parse(this.responseText)
            let articles = json.articles;
            console.log(articles)
            let newshtml ="";
            articles.forEach(function(element,index) {
             
                let news = `<div class="accordion-item">
                        <h2 class="accordion-header" id="panelsStayOpen-heading${index}">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapse${index}" aria-expanded="true"
                                aria-controls="panelsStayOpen-collapse${index}">
                               <b> Breaking News ${index+1} : </b>  ${element["title"]}
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapse${index}" class="accordion-collapse collapse "
                            aria-labelledby="panelsStayOpen-heading${index}" data-parent="newsaccordion">
                            <div class="accordion-body">
                               ${element["content"]}. <a href="${element['url']}" target="_blank">click here to read more</a>
                            </div>
                        </div>
                    </div>`
                    newshtml+=news;
                });
            
            newsaccordion.innerHTML=newshtml;
        }
        else {
            console.log("some errror has occured")
        }
    }
    
    xhr.send()
    cursor: pointer;
    opacity: 0;
    pointer-events: none;
    transition: 0.3s all ease;
}

.wrapper .typing-area .input-field button:hover {
    background: #007bff;
    color: white;
}

.wrapper .typing-area .input-field input:valid ~ button {
    opacity: 1;
    pointer-events: auto;
}