"use client";

import SharedDeleteButton
from "@/features/shared/components/DeleteButton";

import { deleteCategory }
from "../actions/deleteCategory";

interface Props{
  id:number;
}

export default function DeleteButton({
  id,
}:Props){

  return(

    <SharedDeleteButton

      id={id}

      onDelete={deleteCategory}

      confirmMessage="¿Eliminar esta categoría?"

    />

  );

}