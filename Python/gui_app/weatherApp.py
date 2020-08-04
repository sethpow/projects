import tkinter as tk
import requests

#window measurements
height = 500
width = 750

def get_weather(city):
    weather_key = 'c16c981aa0f2f29ca953e01dea70a72e'
    url = 'https://api.openweathermap.org/data/2.5/weather'
    params = {'q': city, 'APPID': weather_key, 'units': 'imperial'}
    response = requests.get(url, params=params)
    print(response.json())


root = tk.Tk()

canvas = tk.Canvas(height=height, width=width)
canvas.pack()

# background_image = tk.PhotoImage(file='background.png')
# background_label = tk.Label(root, image=background_image)
# background_label.place(relwidth=1, relheight=1)

frame = tk.Frame(root, bg='black', bd=5)
frame.place(relx=0.5, rely=0.1, relwidth=0.75, relheight=0.1, anchor='n')

entry = tk.Entry(frame, font=75)
entry.place(relwidth=0.65, relheight=1)

button = tk.Button(frame, text='Click for weather...', font=75, command=lambda: get_weather(entry.get()))
button.place(relx=0.7, relwidth=.3, relheight=1)

lower_frame = tk.Frame(root, bg='black', bd=5)
lower_frame.place(relx=.5, rely=.25, relwidth=.75, relheight=.6, anchor='n')

label = tk.Label(lower_frame)
label.place(relwidth=1, relheight=1)

root.mainloop()