from tkinter import *

def main():


    ventana_principal = Tk('Paypal a a ARS')

    ventana_principal.title = 'Inserte el valor del dolar'

    ventana_principal.minsize(width=300, height= 500)
    ventana_principal.config(padx=35,pady=35)

    #Obtener precio dolar:
    precio_dolar = Label(text='Inserte precio del dolar',font=('Arial',14))
    precio_dolar.grid(column=2,row=1)

    dolar = Entry(width=20,font=('Arial',14))
    dolar.grid(column=2,row=2)



    #Cuanto se va a cambiar
    cant_dolar = Label(text='Cuanta cantidad desea transferir por paypal',font=('Arial',14))
    cant_dolar.grid(column=2,row=4)

    cantidad = Entry(width=20,font=('Arial',14))
    cantidad.grid(column=2,row=5)



#----------------------------------------------------------------fin
    ventana_principal.mainloop()






def comision_paypal(cantidad):
    
    paypal_5por = (cantidad - (cantidad*0.054)) 
    comision_arbolito = (paypal_5por - (paypal_5por*0.035))

    return comision_arbolito

    

if __name__ == "__main__":
    main()


    