import { getAndDisplayBooks  } from "./main-logic.js";
import { jest } from '@jest/globals'
import { JSDOM } from "jsdom"

// test
describe('getAndDisplayBooks', () => {
    it('should display books correctly', async () => {
        const dom = new JSDOM();
        const doc = dom.window.document;

        // mock dependencies / get the params ready
        const mockGetBooks = jest.fn().mockResolvedValue(
            [{
                id: "b1",
                title: 'Künstliche Intelligenz',
                authors: 'H. L Dreyfus & S. E Dreyfus',
                year: '1986',
                description: 'a great book about AI',
                coverImage: 'https://m.media-amazon.com/images/I/71HV7JNWBgL._AC_UF894,1000_QL80_.jpg',
                read: false
            }, {
                id: "b2",
                title: 'Neuromancer',
                authors: 'William Gibson',
                year: '1984',
                description: 'a classic cyberpunk novel',
                coverImage: 'https://m.media-amazon.com/images/I/71HV7JNWBgL._AC_UF894,1000_QL80_.jpg',
                read: true
            },{
                id: "b3",
                title: 'Neuromancer',
                authors: 'William Gibson',
                year: '1984',
                description: 'a classic cyberpunk novel',
                coverImage: 'https://m.media-amazon.com/images/I/71HV7JNWBgL._AC_UF894,1000_QL80_.jpg',
                read: true
            }]
        ); 

        doc.body.innerHTML = `
            <div id="baseContainer"></div>
        `;

        const mockDomRoot = {
            createElement: jest.fn().mockImplementation((tagName) => doc.createElement(tagName)),
            getElementById: jest.fn().mockImplementation((id) => doc.getElementById(id)),
        };    

        // call the function
        await getAndDisplayBooks(mockGetBooks, mockDomRoot, jest.fn());

        // verify or expect some results
        expect(mockGetBooks).toHaveBeenCalled();
        expect(doc.getElementById('baseContainer').children.length).toBe(3);
    });    

    it('test null list of books', async () => {
        const dom = new JSDOM();
        const doc = dom.window.document;

        // mock dependencies / get the params ready
        const mockGetBooks = jest.fn().mockResolvedValue(
            null
        ); 

        doc.body.innerHTML = `
            <div id="baseContainer"></div>
        `;

        const mockDomRoot = {
            createElement: jest.fn().mockImplementation((tagName) => doc.createElement(tagName)),
            getElementById: jest.fn().mockImplementation((id) => doc.getElementById(id)),
        };    

        // call the function
        await getAndDisplayBooks(mockGetBooks, mockDomRoot, jest.fn());
        expect(doc.getElementById('baseContainer').children.length).toBe(0);
    });    
    
    it('should display failure message if getBooks fails', async () => {
        const dom = new JSDOM();
        const doc = dom.window.document;

        // mock dependencies / get the params ready
        const mockGetBooks = jest.fn().mockRejectedValue(new Error('Fetch function error message')); 

        doc.body.innerHTML = `
            <div id="baseContainer"></div>
        `;

        const mockDomRoot = {
            createElement: jest.fn().mockImplementation((tagName) => doc.createElement(tagName)),
            getElementById: jest.fn().mockImplementation((id) => doc.getElementById(id)),
        };    

        // call the function
        await getAndDisplayBooks(mockGetBooks, mockDomRoot, jest.fn());
        expect(doc.getElementById('baseContainer').children.length).toBe(1);
        expect(doc.getElementById('baseContainer').children[0].innerHTML).toBe("Could not load the books");
    });        
});    