// render chat templates to the DOM
//clear the list of chats (when the room changes)


class ChatUI {
    constructor(list){
        this.list = list;
    }
    clear(){
        this.list.innerHTML = '';
    }
    render(data){
        const when = dateFns.distanceInWordsToNow(
            data.created_at.toDate(),
            { addSuffix: true}
        )
        const html = `
    <ul class="list-group-item=">
        <span class="userName">${data.username}</span>
        <span class="message">${data.message}</span>
        <div class="time">${when}</div>
    </ul>
    `;

    this.list.innerHTML += html;
    }
};

