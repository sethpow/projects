import tkinter as tk

#window measurements
height = 500
width = 750

root = tk.Tk()

canvas = tk.Canvas(height=height, width=width)
canvas.pack()

frame = tk.Frame(root, bg='black', bd=5)
frame.place(relx=0.5, rely=0.1, relwidth=0.75, relheight=0.1, anchor='n')

entry = tk.Entry(frame, font=75)
entry.place(relwidth=0.65, relheight=1)

button = tk.Button(frame, text='Click for weather...', font=75)
button.place(relx=0.7, relwidth=.3, relheight=1)

lower_frame = tk.Frame(root, bg='black', bd=2.5)
lower_frame.place(relx=.5, rely=.25, relwidth=.75, relheight=.6, anchor='n')

# label = tk.Label(frame, text='This is a label', bg='yellow')
# label.pack()

root.mainloop()