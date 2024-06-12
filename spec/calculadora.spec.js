describe("Teste Calculadora", function () {

    it("Somas válidas", function () {
        expect(soma(1, 2)).toBe(3);
        expect(soma(9, 9)).toBe(18);
    });

    it("Subtrações válida", function () {
        expect(subtracao(3, 1)).toBe(2);
        expect(subtracao(9, 3)).toBe(6);
    });

    it("Multiplicações válidas", function () {
        expect(multiplicacao(2, 2)).toBe(4);
        expect(multiplicacao(9, 9)).toBe(81);
    });

    it("Divisões válidas", function () {
        expect(divisao(15, 3)).toBe(5);
        expect(divisao(10, 2)).toBe(5);
    });

});
