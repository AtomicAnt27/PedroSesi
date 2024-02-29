def dimensoesObjeto():
    while True:
        try:
            compObjeto = float(input("Informe o comprimento do volume: (cm) "))
            largObjeto = float(input("Informe a largura do volume: (cm) "))
            alturaObjeto = float(input("Informe a altura do volume: (cm) "))
            volume = compObjeto * largObjeto * alturaObjeto
            print("O volume do objeto é de {}cm³".format (volume))

            if volume < 1000:
                return 10.00
            elif volume < 10000:
                return 20.00
            elif volume < 30000:
                return 30.00
            elif volume < 100000:
                return 50.00
            else:
                print("Volume do objeto acima do permitido!")
                continue

        except ValueError:
            print("Valores Inválidos!")
            continue

def pesoObjeto():
    while True:
        try:
            peso = float(input("Informe o peso do objeto: (kg) "))

            if peso < 0.1:
                return 1
            elif peso < 1:
                return 1.5
            elif peso < 10:
                return 2
            elif peso < 30:
                return 3
            else:
                print("Peso acime do permitido!")

        except ValueError:
            print("Valor inválido!")
            continue

def rotaObjeto():
    while True:
        rota = input("Selecione a rota desejada:"
        "\nCWBSP - De Curitiba para São Paulo\nCWBRJ - De Curitiba para Rio de Janeiro"
        "\nSPCWB - São Paulo para Curitiba\nSPRJ - São Paulo para Rio de Janeiro"
        "\nRJCWB - Rio de Janeiro para Curitiba\nRJSP - Rio de Janeiro para São Paulo"
        "\n")

        if rota == "CWBSP":
            return 1.2
        elif rota == "CWBRJ":
            return 1.5
        elif rota == "SPCWB":
            return 1.2
        elif rota == "SPRJ":
            return 1
        elif rota == "RJCWB":
            return 1.5
        elif rota == "RJSP":
            return 1
        else:
            print("Rota não permitida!")
            continue

print("------------------------------------------------------\n")
print("----------------------BEM-VINDO-----------------------\n")
volume = dimensoesObjeto()
peso = pesoObjeto()
rota = rotaObjeto()
total = volume * peso * rota
print(" ".format(volume, peso, rota))
print("Valor total do frete: R$ {:.2f}\nValores de multiplicação:\nDimensões: {} x Peso: {} x Rota: {}".format(total, volume, peso, rota))
