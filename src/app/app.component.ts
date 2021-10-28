import { Component } from '@angular/core';

@Component({
  selector: 'binding-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-binding';
  urlImgext = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAk1BMVEXfCCb////dAADeABvfACLeAB/eABTeAB7eAAzfACTeABndAAfoaHTeABP74eTnXmz0v8Pysbb85unlSVntjZbhLD/iIjv98PLoc3vqeoLwqa7++Pn51tr40dX+9PXyr7XmVGLvm6PulJzshI72x8zhGjPrfYfjNUf40tbsiJHwo6rkPk/0usDpbnnkQ1PgES3mWmavJs31AAARLUlEQVR4nO1daZeqOBDFECAEccEFFbXd7XZp/f+/bsjCUoiKSwffHO6HmfNalFyS1JaqQtMqVKhQoUKFChUqVKhQoUKFChUqVKhQoUKFChUq/P9gS5Q9jj+AQV0HEVPHjJ+hm4T/o+xRvQmYEoS2w/lh3PCDGsfUa0zai/oaIVf/1+fTctF62G7UruB73nSR+e/OpUHQbHeVXYTJTw/Rf5GkTdF+59+jJzDeaMgoe8APwnbN47gYPY7g8Iussgf9CFz6k50+r9XuDprnWaczO9c388Mqe8FqhvSyx10UFC2ngFx7+Osih5hUtyzLsCyduqF8PZ27qwAs1tm/sVYNVE9Pz2pzQoTmjRxbJkKdeVoUTXro87UH6U1SIx66d+Sk4aJ+WiDtCFU10udgoEUiPUZ9RAtMCSakmTwVv/nR02j2YwE6XWhOYS2no/0q5vhFP1eqono8zDkmD2lxI8WxsSd/NcLXgNEuGmPr9Bg/BgOdvej7A/QXA3wVhhtNwrSJnrLC9GQT7z5wM1qnaAbaz4tD0o90x+rxRfDHoH2p5IP6K4/fQPNoM+LP0v50K62TRt987ZdQM/oljVP8kIiA3ptGi+vlJ2/25Er1bLZQ11inpktCK0/AfcNwH4exllbJ13MiBsLSpf5vhApVHwS+7wk0GuPxZFQGRaxLITN/j5DHqCV+bxxuaTKoATSct9zjMaBvcfPF27QYOki9Gv4imQGG3ov7/KnhtN86g+I3D8lvmvu0jzU1lEsedyhuPXqnHWIjaT7UQ6+Y9tKTeFKtKI1esqDeCOxyGz7Yh3wSa5Chp5ihTYRsb5A3Lx7jxOTzLDSPMrKmo9jzcMTzDdaP6EEMcOXR6PtabUjE/9M4qnWRrV9x2+YjEu7UB1hfoUg2bGtjO4AMu2qFqSPW6O6RTag34ZAX14ZMQ+WOnWxIea5U5btLsQndRzZhluHNSYmUf4Ivle4x1sQK6jwU6HyEIRSj3LJYqfSOpZj5euyeDzBEy/SFY7RhC0YhQ7zmNw6sxzRUcYZuPX1d0Dec8A+ewlXqfPE7/zy49QszpL/gurPJjVT/mnp5P7DFb+w/umqKMtR78DJ+H3M/7SszaojYhcNHNXBBhtYaHH5EViHd91XNoU2mT01hQYZGHNniaMTRH3WLlApz8edhE6MQQ4yBpveVexQhEI81BPbDty7CEFN4vrov4WgR9/mt2zeDCgZNQ+ZdFGBoI0hwVoJjr7kiPn3TlzFmA4ATp3ifYZbgsZRzDNQQAuDWNc4KchHO612GGE3ABRt2E1N18AILZXXb0HcyZnMxhphAgjzAheaaYop0w+++v+n4PsUQm5Ag98xCP1+x56uJSJF322B7hiGm3+BTHuByz+zA5+/Y5EGo+9uS9BmGWTXBCVIWyFAcCjZE8OSOxfY4Q4NCl54T1PvcDVVnzDBQESRd31b3xRimohj6CeYR8SCzdRIG6llpkI1wx+nONizGsJEEQGkPGNtCihq2f/EkFEBorMkdq7sIw50Ti2P3F4bVuL9kaJEFflC6ERF/2Ls74u0+wynPnhGT6GRW70Ys0djFUBm+CJUvv+cyLSMgijFsaUxU6dt1+F80hBfXHUiw5qvMJzZEfCG19/FvJ41fXIThkB2oYve4ZYcTXXBp0HETghNhA6v0oHQRIkrFEwjwV2u+eZ/h95qRoP1dKJEx+oLf77PJpeJsuSUzkVSeyUjvNyVKM6Fp7z7DJZ9ANGwTrBkZS23sstVhivSHHdLFIemvwuwMU8QxU1v/UYbjHpNSFLfmDptH+O0DTwcgHfkkcjbF3zPkGyN4nuGPYzE38OwNHEYlqwaZSHH40gya4QV4y/9eV+jou3N2R/85hla90WcTaJG2vw0XOsrkItT5z4pwt8cuiOIJKr0LwdB7jqG9dtmGcjr+ilrhRM7hN3uMky0OLCYWX5h4zTfk4F9hyF1ZPaTAVqORiQOsCOOEhXM2l+k5ZTBcvLBKGUfU8Wu/4Q5ze1DLdPkW1G3+a83o9+UqVbkPTaGen2VIza/a94mClFuG6YybnuSXSZ5UhpyUNCplqYxhPMcQo6ZfWzhMzc/BxxNGOpxfbr59pTLkpLZQqQ/1I7+llhgZBRgGGz4H7rpVm3bCydKtbMSJ/Rx2RrVsDqc1A0tABawLI+M+w/aJCUkDbYJay9LZWgTert/hK5SeWJhmvAa+IBUPVKVdKrd+Kohxj2Hjl82Q7WzHwuDG8Hi3djC5GHE6QTybCaToLlLa8DY4fFipaOlthsGG121Rdiw+Zga3TuECPvJFibmD4e2zri7hmXNK/UMZ8U4lDdxkOKLsnwaqT5k+COfHgSt0deKXU5tpwZ1zITJFkP+gNJwoxp46Ur/BcNVzbCYitxM2PySaqgQbvihDKzV8AF7HuVyLLlf4auM0UiEmwvQqQ6/JC9JMysywObNYzDWQoZM+X+sGT+zYuTlaXYYuZ0pjbVKYJlZGPsNVsOSlCRY6+lza2OFUNdOeRCAmUCMsu7vRyc3zl6FLS2m81BbZZqN4meYytI4nli2F0Z5tpDnbYBYBzvyK+/lSsnavlJE6PJ1Wdfqz2PzJXXMZajzThthMFIYSMiTr7NMiJtTrfALd04SRvSZJEP+O0mwvLVJRiZmRz1BjBaXcSl+w+UnX7rExO1yfYpbq5J+vpvlLm02l3c1vK0IMi0gjZhj6kqHON2AoTdgEONv0RXxXasyKmzARdN0zkg9TebGXyZdOrIUhw0ad7ygDzdifgyETp4aT1hGhCJKXhBPY6t/KMEbcwVKasMchJUZ0RJpm6A358sNoy/3Yg8YmlPTSx2bCSBVWXGN2sw6l2DHXH8ASyzSSpglDf0MYI5uchK3Fx28AJR9qBRGTcua16eBOIb58lGp1hbgzXzyBDLVHDKdLh+UU2K4pcsK6vMieG9wRIk4Yzfxa914pn+3yL725FKAQXDEr8uxCMPSXiP/TdRZcX65ObIp14OnOhQTVyGlV25l3s4vlbdQaNAI2SE1kDL0N52ebzg/n581EWHuWisUcNCFUKFnUDvb9EgbbhRJNKeQG2fBZI17j6Ap+7oYPKug6bIGadjvht9qKDWigo9fqF6n1Njepm6iGTBEWk4hnhDmoMb9ae80myECDxAqNukJgsp+0toUK+WzKf03pwVoKsvxK5AizsTN+YkWOO9KlT9yIRl129jD7o3YxfuHSEEZQt5y6yigvqmbIQK9LlmL+/GPi0kt4AyQEjG53d9uivQhkKHhaWq8lWZd3YOsUE3chF+SCkzFSbpK/kfywXl/23cIRJVltUc4uZIjqLWbUQOtovto20xAYJQvUG0p+mr1vnh7omERFwNgrRZAKyJoZ39kfYmnJV6Brj5L16cRKvX96qADMkA+wzM48jrBVIoUnpaXuxC14GoPn+w/IKssyzJkEVrp0zjtyaWmgc2SkjuvO80FO54f/xhN51m+FE/u00w3wKEJMXur8RGWF87E0MSMRJSwvHOFRxCbMYf9S9y5LpOsJQV0q8ImNY05c7lGQuaAX7F7swIaxUK2e8uznS5j12g5zE9okwuKueUv3xdYkOMrC3H5CvyEq2u1QZyge+6RJXn3wspI73IQlmWsZiHP5uvCIR9vXG8sZEcH3dWl4FTpqiuKEjfV6c5PoGD80jz6FYMiPP/N2p1D3snswtzJqrD68lg85f42le3ks9gxQlLq4+oxeURTVQ37Tr72cPnw/8nITSfbCRxC0TTII5cuqTuXus9CpO6IvSBp3HQXlDjnniKqBifXj1xrddbT7MJkxF8PLPyMrACPJE/6AdmaYrHfBdLdP2gDjbeRi7Mxn/Il0zGNTupCxyP7gt2fITesGGmc4+fXHbVJXj2Me007JbQVtw60f2k1EsizMeBexUNQjHG0XdeNShIldcodPu39enh03j0A6jyv0nYpqR8PRF0mpxfIdDcNewqmv5faU5XD2ySFUY+AWsHCwifapk+/v3gc0vrw5M1bkYPANNeqEa/nG9YaJ+svUqY04avxw2GSdiuPXvNHMRq5+WXjG2gib+y4oxhvZZTv0xYDRFuR0TSfz5pqyZtAm1XWdUtN1kHnqLFqwUq3dK961tmwYaHuoQfiN1m7xM6zX64Of7u4w9jKf10b90iXMQzCQvSjYc56v5a75cQ1L7wK7aHaY3icXTm/odn1AOOYZWI5+Hl0sR4jGaGZemA7/EGyLkN7gq5E7l9Px17Hn3NQm/wbYS0rwvvkzOqzGnj+d+t54dRgtm1sdkX/yxRa54O+WcVAMh79zpuxRVahQocJnwLBCgFZJNPzDpR/BXtkVgpjSN9IBLv+SizL8KouXpg/TGHQ6M9hRzSKov9m1xuPx5Kv7ywMUtA4Q/sWo38dMPUVbz7fE0kOhaNZOm+CsasI2oV3qxqk5N6E601uLc0wvkByJUTTM2KUs5daC/SFaTlTudxuquwxpcSFEFnEiIUbNC7ubBf1dkNDOGtTAGoUrUN0FWtOujSsqUNLxRQPZ2pjVL2RqfzuGrKO6DV9p7ZoA+s4dylKmyHZyPAq+lxzoGxPN1oLLS7O41yvmTxjmD0Xk82Z7lQhsaJTcEKMRN024DbUtkjlkAXIWAa/1hMUjMdhekiWhEdokKhS7jab65C86yB2JJzrI5bPnvclA+2M2rU42bpWHEnKjyC53JKzbEboyKXwvZboihvoD3Ql1MKjsHxwB5b/hMBT+tJn7idhLNoZiBUVlxbexKuHVHaTdah1gxbl3aK1+DXy6JhpZeZa9PrRTWIQWzTb+yxdUQO2v+DrVlV2CouNkluMPchwjSptMMF40O7PjQTZ4s0kaLI6P438h8J4AHznxJ2UlmWbI8MYO2TXa2iJXD10QpN23LKH59l36UXAoF6GM4GZHpmdUPT5Owvc1GgFStQQVmEXGJ+AWKVR3wT47SuxmF2kK0HwrZe9B6LA5CbdIoYg9XxBcj9KANeiyjitCGR2gM7hU3poBLJ3L9+voZ/CVFlACFnj1kV/Gu50yyHT8Db0E2SUrWqOXsyCLXiMswRxC860MFZiBTYH7EDBBAxyOnDx7dOE6pQD9KrVdFHJhwLfcjBE7i0mTXl665S58KDBsBc03tR1Lc5GxvVnJLHSELgsjcx5KAozBh68lAb4FGSefBVJgd9JLhpnIxwjYAFA0l1kNFCFje7MeltAoWV7sJNIGX4EaD0ohtS1Zc2FbwMLmbQYy0vBiGjIRGRhdgqL58vEoRyaayJ0/8wf8rZMRNTbcaT6wB2TFaPzdDxA0sNfTjvcjhcLHxzFFvh4tqO/hHGf8xPKN0mzw4cw4QKuEdZlDpmUYlKAj+0omIgM1HpRC45IFDWZHLdCJwAg5UWFreqTL2b5zHAXcLM/qe7AQySj9WQlB/DRwf7VawYBv0FqtJvh6cJcvYgRDpdCog19V2QgyB9nFGLFE1yODTDHICvcIsG+QrQFz5/Z7F/4cZn44NBSnV4M0LIKRkUNwIUJzKChZ0FyJcLKVeCXIyFvUk0tvK4EJRHMZQfw0rkQ42d6xzdyUvVVOqBS+fgtGMHblzuG1pchNFD33WJE3XIInHT6UlvCplRzBuC5oGEjeoQwzwjOOBVyIGT1TwmlhGnDLXAwZ5XzMXKGMSQdDaZkIRskJ7SRf0MS+UPwO+Bhc32fkEzxNgifDZZfmXVHriZKmp8wz4K4QgV+DabOwY23JoVLZX+gCqaa0GPVGaQXOj0ahvs+8dg+BaS+jbVIap999aGumk13O+xBAOGCCtstd63u8ai/qmJvYJ/CKiG1GloAP1XG5AsMwLJCwZMXv7UhB5kIRN2owA97ykRWWl68AqVChQoUKFSpUqFChQoUKFSpUqFChQoUKFSpUqFDhs/AfY88RxpB+j90AAAAASUVORK5CYII=';
  urlImgLocal = 'assets/logoAngular.png'
  calcularPI():number{
    return Math.PI;
  }
  calcularAreaTriangulo(base:number,altura:number):number{
    return base*altura/2;
  }
  figura:any={
    tipo:'Triángulo',
    base:4,
    altura:16,
    imagen:'assets/triangulo.jpg'
  }

  calcularAreaRectangulo(base:number,altura:number):number{
    return base*altura;
  }
  figura2:any={
    tipo:'rectangulo',
    base:10,
    altura:8,
    imagen:'assets/rectangulo.png'
  
  }

  calcularAreaTrapecio(baseMayor:number,baseMenor:number,altura:number):number{
    return (baseMayor+baseMenor)*altura/2;
  }
  figura3:any={
    tipo:'trapecio',
    baseMayor:10,
    baseMenor:10,
    altura:8,
    imagen:'assets/trapecio.png'
  
  }

  calcularAreaRombo(diagonalMayor:number,diagonalMenor:number):number{
    return diagonalMayor*diagonalMenor/2;
  }
  figura4:any={
    tipo:'rombo',
    diagonalMayor:10,
    diagonalMenor:10,
   
    imagen:'assets/trapecio.png'
  
  }
}

