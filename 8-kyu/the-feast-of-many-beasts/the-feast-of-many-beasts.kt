fun feast(beast: String, dish: String): Boolean {
    var first: Boolean = beast.first() == dish.first()
    var second: Boolean = beast.last() == dish.last()
    return first && second
    
}