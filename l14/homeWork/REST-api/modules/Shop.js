class Shop {

    static getShop() {
        return this.departments;
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    static getDepartment(name) {
        let resultDepartment = '';
        this.departments.find(function (department) {
            if (department.name === name) {
                resultDepartment = department;
            }
        });

        return resultDepartment;
    }

    static addDepartment(department) {
        Shop.departments.push(department)
    }

    static deleteDepartment(name) {
        this.departments.find(function (department) {
            if (department.name === name) {
                Shop.departments.splice(Shop.departments.indexOf(department), 1);
                return true;
            }
        });
    }

    static changeDepartment(name, newDepartment) {
        this.departments.find(function (department) {
            if (department.name === name) {
                Shop.departments.splice(Shop.departments.indexOf(department), 1, newDepartment);
                return true;
            }
        });
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    static getCase(name, id) {
        //прийшло ввести додаткову змінну, бо return в блоці find весь час вертав undefined
        let resultCase = '';
        this.departments.find(function (department) {
            if (department.name === name) {
                department.cases.find(function (currentCase) {
                    if (currentCase.id === id)
                        resultCase = currentCase;
                });
            }
        });
        return resultCase;
    }

    static addCase(name, currentCase) {
        this.departments.find(function (department) {
            if (department.name === name) {
                currentCase.id = new Date.now();
                department.cases.push(currentCase);
            }
        });
    }

    static deleteCase(name, caseId) {
        this.departments.find(function (department) {
            if (department.name === name) {
                department.cases.find(function (currentCase) {
                    if (currentCase.id === caseId)
                        department.cases.splice(department.cases.indexOf(currentCase), 1);
                });
            }
        });
    }

    static changeCase(name, caseId, newCase) {
        this.departments.find(function (department) {
            if (department.name === name) {
                department.cases.find(function (currentCase) {
                    if (currentCase.id === caseId)
                        department.cases.splice(department.cases.indexOf(currentCase), 1, newCase);
                });
            }
        });
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    static getProduct(name, id, productName) {
        //прийшло ввести додаткову змінну, бо return в блоці find весь час вертав undefined
        let resultProduct = '';
        this.departments.find(function (department) {
            if (department.name === name) {
                department.cases.find(function (currentCase) {
                    if (currentCase.id === id)
                        currentCase.products.find(function (currentProduct) {
                            if (currentProduct.name === productName)
                                resultProduct = currentProduct;
                        });
                });
            }
        });
        return resultProduct;
    }

    static addProduct(name, caseId, currentProduct) {
        this.departments.find(function (department) {
            if (department.name === name) {
                department.cases.find(function (currentCase) {
                    if (currentCase.id === caseId) {
                        currentCase.products.push(currentProduct);
                    }
                });
            }
        });
    }

    static deleteProduct(name, caseId, productName) {
        /*по до кінця не зрозумілих причинах з"являлася помилка коли видалили один елемент, а через return виходити не
        хотіло, прийшлося юзати try catch*/
        try {
            this.departments.find(function (department) {
                if (department.name === name) {
                    department.cases.find(function (currentCase) {
                        if (currentCase.id === caseId)
                            currentCase.products.find(function (currentProduct) {
                                if (currentProduct.name === productName) {
                                    currentCase.products.splice(currentCase.products.indexOf(currentProduct), 1);
                                    throw 'exit';
                                }
                            });
                    });
                }
            });
        } catch (e) {
            if (e!=='exit') throw e
        }
    }

    static changeProduct(name, caseId, productName, newProduct) {
        this.departments.find(function (department) {
            if (department.name === name) {
                department.cases.find(function (currentCase) {
                    if (currentCase.id === caseId)
                        currentCase.products.find(function (currentProduct) {
                            if (currentProduct.name === productName) {
                                currentCase.products.splice(currentCase.products.indexOf(currentProduct), 1, newProduct);
                            }
                        });
                });
            }
        });
    }

    //
    // static changeCase(name, caseId, newCase) {
    //     this.departments.find(function (department) {
    //         if (department.name === name) {
    //             department.cases.find(function (currentCase) {
    //                 if (currentCase.id === caseId)
    //                     department.cases.splice(department.cases.indexOf(currentCase), 1, newCase);
    //             });
    //         }
    //     });
    // }
}


Shop.departments = [
    {
        name: 'fruits and vegs',
        cases: [
            {
                id: 1,
                products: [
                    {
                        name: 'яблоки',
                        titles: [
                            {
                                name: 'голден',
                                units: 'kg',
                                quantity: 20,
                                price: 25
                            },
                            {
                                name: 'семеренко',
                                units: 'kg',
                                quantity: 10,
                                price: 15
                            }
                        ]
                    },
                    {
                        name: 'апельсины',
                        titles: [
                            {
                                name: 'сорт1',
                                units: 'kg',
                                quantity: 25,
                                price: 40
                            },
                            {
                                name: 'сорт2',
                                units: 'kg',
                                quantity: 30,
                                price: 55
                            }
                        ]
                    }
                ]
            },
            {
                id: 2,
                products: [
                    {
                        name: 'манго',
                        titles: [
                            {
                                name: 'крупный',
                                units: 'unit',
                                quantity: 20,
                                price: 50
                            },
                            {
                                name: 'средний',
                                units: 'unit',
                                quantity: 25,
                                price: 40
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: 'fish',
        cases: [
            {
                id: 1,
                products: [
                    {
                        name: 'сельдь',
                        titles: [
                            {
                                name: 'финская',
                                units: 'kg',
                                quantity: 30,
                                price: 80
                            },
                            {
                                name: 'норвежская',
                                units: 'pack',
                                quantity: 10,
                                price: 40
                            }
                        ]
                    }
                ]
            }
        ]
    }
];

module.exports.Shop = Shop;