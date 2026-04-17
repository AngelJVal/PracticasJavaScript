function info(cadena){
    var resultado = "La cadena \""+cadena+"\" ";

    //Comprobar mayusculas y minusculas
    if (cadena == cadena.toUpperCase())
        resultado += " esta formada solo por mayusculas";
    else if (cadena == cadena.toLowerCase())
        resultado += " Esta formado por minusculas";
    else
        resultado += " Esta formado por mayusculas y minusculas";
    return resultado
}

alert (info("OVNI = EL OBJETO VOLADOR NO IDENTIFICADO"));
alert (info("En un lugar de la mancha..."));
alert(info("aprendiendo javascript"));