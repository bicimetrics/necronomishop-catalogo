"use client";

import SharedDeleteButton
from "@/features/shared/components/DeleteButton";

import { deleteProduct }
from "../actions/deleteProduct";

interface Props {
  id:number;
}

export default function DeleteButton({
  id,
}:Props){

  return (

    <SharedDeleteButton

      id={id}

      onDelete={deleteProduct}

      confirmMessage="¿Eliminar este producto?"

    />

  );

}