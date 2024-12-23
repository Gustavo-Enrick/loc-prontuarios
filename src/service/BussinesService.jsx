// Função para verificar o status
export const checkReturn = (paciente) => {
    return paciente.status ? "DEVOLVIDO" : "PENDENTE";
};

export const orderByNumber = (pacientes) => {
    return [...pacientes].sort((a, b) => a.numeroPront - b.numeroPront);
};