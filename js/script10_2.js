function valida(campo) {
    var valor = campo.value.trim().toUpperCase();

    if (valor === "") {
        alert("Faltan datos");
        return false;
    } else if (!valor.match(/^[A-ZÑ&]{3,4}[0-9]{6}[A-Z0-9]{3}$/)) {
        alert("No tiene formato de RFC");
        return false;
    } else {
        alert("RFC válido");
        return true;
    }
}