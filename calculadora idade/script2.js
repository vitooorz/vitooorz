      function calcularidade() {
            const hoje = new Date()
            const result = document.getElementById("resultado")

            dia = parseInt(document.getElementById("dia").value)
            mes = parseInt(document.getElementById("mes").value) 
            ano = parseInt(document.getElementById("ano").value)


            if (dia <= 0 || dia > 31 || ano == 0) {
                window.alert('digite uma data valida')
            }

            nascimento = new Date(ano, mes, dia)

            var idade = hoje.getFullYear() - nascimento.getFullYear()
            result.innerHTML = `Sua idade é ${idade} anos`
        }
