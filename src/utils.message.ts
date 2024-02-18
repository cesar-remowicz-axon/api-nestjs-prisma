interface IMessage {
    // userNotFound: string;
}

export class Message implements IMessage {
    userNotFound = 'Usuario não encotrado';
    success = 'Concluído com sucesso';
    error = 'Algo deu errado, tente novamente';
}