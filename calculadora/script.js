         function calcular() {
            const valor1 = Number(document.getElementById("num1").value)
            const valor2 = Number(document.getElementById("num2").value)
            const operador = document.getElementById("sinal").value
            const result = document.getElementById("resultado")
            
            if (operador == "+"){
                resultado = valor1 + valor2
            }

            else if (operador == "-") {
                resultado = valor1 - valor2
            }

            else if (operador == "*") {
                resultado = valor1 * valor2
            }

            else if (operador == "/") {
                resultado = valor1 / valor2
            }

            result.textContent = resultado
            }