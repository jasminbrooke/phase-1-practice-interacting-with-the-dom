document.addEventListener("DOMContentLoaded", () => {
    const plus = document.getElementById("plus")
    const minus = document.getElementById("minus")
    const pause = document.getElementById("pause")
    const counter = document.getElementById("counter")
    const heart = document.getElementById("heart")
    const submit = document.getElementById("submit")
    const likes = document.getElementsByClassName("likes")[0]
    const commentList = document.getElementById("list")
    let userInput = document.getElementById("comment-input")

    let currentCounter = counter.innerText
    let likeCount = 1

    const like = () => {
        let item = document.createElement("li")
        item.setAttribute('id', currentCounter)
        item.innerText = `${currentCounter} has been liked ${likeCount} times`
        
        likes.appendChild(item)
    }

    const likeCounter = () => {
        let countLi = document.getElementById(currentCounter)
        if(countLi){
            likeCount += 1;
            countLi.innerText = `${currentCounter} has been liked ${likeCount} times`
        }
        else {
            like()
        }
    }

    const plusOne = () => {
        counter.innerText = parseInt(counter.innerText) + 1
    }
    const minusOne = () => {
        counter.innerText = parseInt(counter.innerText) - 1
    }

    const intervalHandler = () => {
        let interval = setInterval(() => {
            if (pause.innerText === "resume")
                clearInterval(interval)
            else
                plusOne();
                currentCounter = counter.innerText;
                likeCount = 1;
        }, 1000)
    }

    intervalHandler()

    const clear = () => {
        if (pause.innerText === "pause") {
            [plus, minus, heart, submit].forEach(button => button.disabled = true);
            pause.innerText = "resume"
        }
        else {
            intervalHandler();
            [plus, minus, heart, submit].forEach(button => button.disabled = false);
            pause.innerText = "pause"
        }
    }

    const addComment = (e) => {
        e.preventDefault()
        let inputValue = userInput.value
        let comment = document.createElement("p")
        comment.innerText = inputValue
        commentList.appendChild(comment)
        userInput.value = ''
    }

    plus.addEventListener("click", plusOne)
    minus.addEventListener("click", minusOne)
    pause.addEventListener("click", clear)
    heart.addEventListener("click", likeCounter)
    submit.addEventListener("click", addComment)








})