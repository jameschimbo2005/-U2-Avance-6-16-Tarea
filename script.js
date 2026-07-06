const formulario = document.getElementById("formulario");
const lista = document.getElementById("lista");
const mensaje = document.getElementById("mensaje");
const contador = document.getElementById("contador");

const nombre = document.getElementById("nombre");
const descripcion = document.getElementById("descripcion");
const categoria = document.getElementById("categoria");

let total = 0;

function validarNombre(){

    if(nombre.value.trim().length < 3){

        nombre.classList.add("is-invalid");
        nombre.classList.remove("is-valid");
        document.getElementById("errorNombre").textContent="Debe ingresar mínimo 3 caracteres.";
        return false;

    }

    nombre.classList.remove("is-invalid");
    nombre.classList.add("is-valid");
    document.getElementById("errorNombre").textContent="";
    return true;

}

function validarDescripcion(){

    if(descripcion.value.trim().length < 10){

        descripcion.classList.add("is-invalid");
        descripcion.classList.remove("is-valid");
        document.getElementById("errorDescripcion").textContent="Ingrese mínimo 10 caracteres.";
        return false;

    }

    descripcion.classList.remove("is-invalid");
    descripcion.classList.add("is-valid");
    document.getElementById("errorDescripcion").textContent="";
    return true;

}

function validarCategoria(){

    if(categoria.value==""){

        categoria.classList.add("is-invalid");
        categoria.classList.remove("is-valid");
        document.getElementById("errorCategoria").textContent="Seleccione una categoría.";
        return false;

    }

    categoria.classList.remove("is-invalid");
    categoria.classList.add("is-valid");
    document.getElementById("errorCategoria").textContent="";
    return true;

}

nombre.addEventListener("input", validarNombre);
nombre.addEventListener("blur", validarNombre);

descripcion.addEventListener("input", validarDescripcion);
descripcion.addEventListener("blur", validarDescripcion);

categoria.addEventListener("change", validarCategoria);
categoria.addEventListener("blur", validarCategoria);

formulario.addEventListener("submit", function(e){

    e.preventDefault();

    const ok1 = validarNombre();
    const ok2 = validarDescripcion();
    const ok3 = validarCategoria();

    if(!(ok1 && ok2 && ok3)){

        mensaje.innerHTML="<div class='alert alert-danger'>Corrija los errores antes de registrar.</div>";
        return;

    }

    mensaje.innerHTML="<div class='alert alert-success'>Registro agregado correctamente.</div>";

    const tarjeta=document.createElement("div");

    tarjeta.className="card item p-3";

    tarjeta.innerHTML=`
        <h5>${nombre.value}</h5>
        <p>${descripcion.value}</p>
        <p><strong>Categoría:</strong> ${categoria.value}</p>

        <button class="btn btn-danger eliminar">
        Eliminar
        </button>
    `;

    lista.appendChild(tarjeta);

    total++;
    contador.textContent=total;

    tarjeta.querySelector(".eliminar").addEventListener("click",function(){

        tarjeta.remove();

        total--;

        contador.textContent=total;

    });

    formulario.reset();

    nombre.classList.remove("is-valid");
    descripcion.classList.remove("is-valid");
    categoria.classList.remove("is-valid");

});