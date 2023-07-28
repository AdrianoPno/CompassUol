// validationUtils.ts

// Interface do Tutor
interface Tutor {
  id: string;
  name: string;
  phone: string;
  email: string;
  date_of_birth: string;
  zip_code: string;
  pets: Pet[];
}

// Interface do Pet
interface Pet {
  id: string;
  name: string;
  species: string;
  carry: string;
  weight: number;
  date_of_birth: string;
}

export { Pet }; // Exportando a interface Pet

export function validateTutorFields(tutor: Tutor): string | null {
  // Implementação da validação do tutor
  if (!tutor.name || typeof tutor.name !== 'string' || tutor.name.length < 3 || /\d/.test(tutor.name)) {
    return "Campo 'name' inválido. Deve ser uma string com no mínimo 3 caracteres e não pode conter números.";
  }

  // Validação do campo 'phone'
  if (!tutor.phone || typeof tutor.phone !== 'string' || !/^\d{11}$/.test(tutor.phone)) {
    return "Campo 'phone' inválido. Deve conter exatamente 11 dígitos numéricos.";
  }

  // Validação do campo 'email'
  if (!tutor.email || typeof tutor.email !== 'string' || !/^\S+@\S+\.\S+$/.test(tutor.email)) {
    return "Campo 'email' inválido. Deve ser um endereço de email válido.";
  }

  // Validação do campo 'date_of_birth'
  if (!tutor.date_of_birth || typeof tutor.date_of_birth !== 'string' || !/^\d{4}([-\/])\d{2}\1\d{2}$/.test(tutor.date_of_birth)) {
    return "Campo 'date_of_birth' inválido. Deve estar no formato 'YYYY-MM-DD' e pode utilizar barras (/) ou hifens (-) como separadores.";
  }

  // Validação do campo 'zip_code'
  if (!tutor.zip_code || typeof tutor.zip_code !== 'string' || tutor.zip_code.length < 3) {
    return "Campo 'zip_code' inválido. Deve ser uma string com no mínimo 3 caracteres.";
  }

  return null; // Retornar null indica que a validação passou com sucesso
}

export function validatePetFields(pet: Pet): string | null {
  if (!pet.name || typeof pet.name !== 'string' || pet.name.length < 3 || /\d/.test(pet.name)) {
    return "Campo 'name' inválido. Deve ser uma string com no mínimo 3 caracteres e não pode conter números.";
  }

  if (!pet.species || typeof pet.species !== 'string' || pet.species.trim() === '') {
    return "Campo 'species' inválido. Deve ser uma string não vazia.";
  }

  if (!pet.carry || typeof pet.carry !== 'string' || pet.carry.length !== 1) {
    return "Campo 'carry' inválido. Deve ser uma string não vazia e conter apenas um caractere.";
  }

  if (typeof pet.weight !== 'number' || pet.weight <= 0) {
    return "Campo 'weight' inválido. Deve ser um número maior que zero.";
  }

  return null; // Retornar null indica que a validação passou com sucesso
}
