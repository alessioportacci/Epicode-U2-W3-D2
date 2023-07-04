      //Mi prendo il textField ed il pulsante
      const textField = document.getElementById("nome")
      const buttonSave = document.getElementById("form-save")
      const buttonDelete = document.getElementById("form-delete")
      //Variabile per il timer
      if (sessionStorage.getItem("timer"))
        //Al cliccare del pulsante salva, mi salvo il nome
        buttonSave.addEventListener("click", function (e) {
          e.preventDefault()
          let nome = document.getElementById("nome").value
          localStorage.setItem("nome", textField.value)
          console.log(localStorage.getItem("nome"))
        })

      //Al cliccare del pulsante cancella, cancello il nome
      buttonDelete.addEventListener("click", function (e) {
        e.preventDefault()
        localStorage.removeItem("nome")
        textField.value = ""
        console.log(localStorage.getItem("nome")) 
      })

      //Se c'è qualcosa nel local storage, riempio tutto
      if (localStorage.getItem("nome")) {
        textField.value = localStorage.getItem("nome")
      }

      if (!sessionStorage.getItem("secondi")) {
        sessionStorage.setItem("secondi", 0)
      }

      //Timer
      setInterval(() => {
        sessionStorage.setItem(
          "secondi",
          parseInt(sessionStorage.getItem("secondi")) + 1
        )
        console.log(sessionStorage.getItem("secondi"))
      }, "1000")