const $tabDescription = document.querySelector('.list-tabs__description');
const $tabSpecifications = document.querySelector('.list-tabs__specifications');
const $tabContent = document.querySelector('.tab-content');

let productDescription = `
    <p>
        Вики Мини Ф — ККТ в оригинальном исполнении. 
        Наличие сенсорного дисплея является отличительной 
        особенностью модели. В комплекте установлен ФН, 
        согласно 54-ФЗ, и принтер, скорость печати которого 
        соответствует работе кассового узла со средней нагрузкой. 
        Возможно подключение дополнительного кассового оборудования. 
        Применим во всех сферах бизнеса.</p>
`;
let productSpecifications = [
    {
        prop: 'Возможность передачи данных',
        value: 'Есть'
    },
    {
        prop: 'Подключение банковского терминала',
        value: 'Есть'
    },
    {
        prop: 'Подключение сканера штрих-кода',
        value: 'Есть'
    }
];

if ($tabDescription.classList.contains('active')) {
    $tabContent.innerHTML = productDescription;
}

$tabSpecifications.addEventListener('click', function () {
    if (this.classList.contains('active')) {
        return false;
    } else {
        this.classList.add('active');
        $tabDescription.classList.remove('active');

        let template = '';
        $tabContent.innerHTML = '';
        
        let $table = document.createElement('table');
        $table.classList.add('specifications');
        $tabContent.appendChild($table);

        productSpecifications.forEach(function (item) {
            template += `
                <tr class="specifications__tr">
                    <td class="specifications__td">${item.prop}</td>
                    <td class="specifications__td">${item.value}</td>
                </td>
            `;

            document.querySelector('.specifications').innerHTML = template;
        });
    }
});

$tabDescription.addEventListener('click', function () {
    if (this.classList.contains('active')) {
        return false;
    } else {
        this.classList.add('active');
        $tabSpecifications.classList.remove('active');

        $tabContent.innerHTML = '';
        $tabContent.innerHTML = productDescription;
    }
});