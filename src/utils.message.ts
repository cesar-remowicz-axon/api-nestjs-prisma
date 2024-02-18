interface IMessage {
    // userNotFound: string;
}

export class Message implements IMessage {
    public userNotFound = 'Usuario não encotrado';
    public success = 'Concluído com sucesso';
    public error = 'Algo deu errado, tente novamente';
}