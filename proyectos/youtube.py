import os
from pytube import YouTube

def descargar_video():
    # Pide el enlace al usuario
    enlace = input("Introduce el enlace del video de YouTube: ")

    try:
        # Crea un objeto YouTube
        yt = YouTube(enlace)
        
        # Obtiene el stream con la mejor calidad
        stream = yt.streams.get_highest_resolution()

        # Carpeta de descargas del usuario
        carpeta_descargas = os.path.join(os.path.expanduser("~"), "Downloads")

        # Descarga el video
        print(f"Descargando: {yt.title}...")
        stream.download(output_path=carpeta_descargas)
        print("Descarga completada!")

    except Exception as e:
        print(f"Ocurrió un error: {e}")

if __name__ == "__main__":
    descargar_video()
