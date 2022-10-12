class Vertex {

    predecessor;
    distance;

    constructor() {
        this.predecessor = null;
        this.distance = null;
    }

    set predecessor(pre) {
        this._predecessor = pre;
    }

    get predecessor() {
        return this._predecessor;
    }

    set distance(d) {
        this._distance = d;
    }

    get distance() {
        return this._distance;
    }

}

export default Vertex;