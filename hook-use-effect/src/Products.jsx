import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
// https://tanstack.com/query/latest/docs/framework/react/overview

// --- Simulación de una API ---
// En una aplicación real, estas serían tus llamadas fetch/axios a un backend
const fetchProductos = async () => {
  // Simula un retardo de red
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch("http://localhost:4000/productos"); // Usamos una API pública de ejemplo
  if (!response.ok) {
    throw new Error("Error al cargar los productos");
  }
  return response.json();
};

const addProducto = async (newProduct) => {
  // Simula un retardo de red
  await new Promise((resolve) => setTimeout(resolve, 1500));
  const response = await fetch("http://localhost:4000/productos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newProduct),
  });
  if (!response.ok) {
    console.log("Error en la respuesta:", response);
    throw new Error("Error al agregar el producto");
  }
  return response.json();
};
// --- Fin de la simulación de API ---

function Productos() {
  const queryClient = useQueryClient();

  // --- Uso de useQuery para obtener productos ---
  const {
    data: productos, // Renombramos 'data' a 'productos' para mayor claridad
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["productos"], // Clave única para esta consulta
    queryFn: fetchProductos, // Función que realiza la llamada a la API
    refetchOnWindowFocus: false,
  });

  // --- Uso de useMutation para agregar un producto ---
  const addProductoMutation = useMutation({
    mutationFn: addProducto, // Función que realiza la llamada a la API POST/PUT/DELETE
    onSuccess: (newProduct) => {
      // Esta función se ejecuta si la mutación fue exitosa
      console.log("Producto agregado:", newProduct);

      // Invalida la caché de 'productos' para que se vuelva a cargar
      // Esto asegura que la lista de productos se actualice automáticamente
      queryClient.invalidateQueries({ queryKey: ["productos"] });
    },
    onError: (err) => {
      // Esta función se ejecuta si la mutación falla
      console.error(`Error al agregar el producto: ${err.message}`)
    },
  });

  const handleAddProduct = () => {
    // Simula un nuevo producto
    // const newProduct = {
    //   title: `Nuevo Producto ${Math.floor(Math.random() * 1000)}`,
    //   body: 'Descripción del nuevo producto.',
    //   userId: 1, // Ejemplo de ID de usuario
    // };
    const newProduct = {
      name: `Nuevo Producto ${Math.floor(Math.random() * 1000)}`,
      price: 9000,
    };
    addProductoMutation.mutate(newProduct); // Dispara la mutación
  };

  if (isLoading) return <p>Cargando productos...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Lista de Productos</h2>
      {/* <ul> */}
      {productos.map((producto) => (
        <p key={producto.id}>
          {/* <strong>{producto.title}</strong> - {producto.body.substring(0, 50)}... */}
          {producto.id} - <strong>{producto.name}</strong> - {producto.price}
        </p>
      ))}
      {/* </ul> */}
      <button
        onClick={handleAddProduct}
        disabled={addProductoMutation.isPending} // Deshabilita el botón mientras la mutación está en curso
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        {addProductoMutation.isPending
          ? "Agregando..."
          : "Agregar Nuevo Producto"}
      </button>
      {addProductoMutation.isError && (
        <p style={{ color: "red" }}>
          Error al agregar: {addProductoMutation.error.message}
        </p>
      )}
      {addProductoMutation.isSuccess && (
        <p style={{ color: "green" }}>
          Producto agregado! (ID: {addProductoMutation.data.id})
        </p>
      )}
    </div>
  );
}

export default Productos;
