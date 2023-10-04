const PORT = 8000

const excludedWords = ['Toppers', 'Technical', 'Women', 'Men', 'Wovens', 'Shapewear', 'Denim', 'Roughwear', 'Volunteer', 'Headwear', 'Outerwear', 'Sweater', 'Urban', 'Merchandising', 'Kitchen', 'Sprinkler', 'Landscape', 'Hosiery', 'Sales', 'Electrical', 'Fire', 'Footwear', 'Handbag', 'Handbags', 'Beauty', 'Merchandising', 'Style', 'Kids', 'Girls', 'Boys', 'Bath', 'Cashier', 'Textile', 'Textiles', 'Pricing', 'Editor', 'Engineer']
const excludedWordsState = 1 // STATE SET TO 1 IS ACTIVE. STATE SET TO 0 IS INACTIVE.

let excludedWordCounter = 0;

const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')
const fs = require('fs')

const dateTime = new Date().toLocaleString();
var fileName = 'DesignJobs_' + dateTime
fileName = fileName.replace(/[&\/\\#, +()$~%.'":*?<>{}]/g, '_') + '.csv';
console.log(fileName)


const writeStream = fs.createWriteStream(fileName)

// Write Headers
writeStream.write(`${dateTime} \n`)
writeStream.write(`Role,Company,LinkedIn \n`)



const app = express()

const url = 'https://www.linkedin.com/jobs/search?keywords=Designer&location=New%20York%2C%20New%20York%2C%20United%20States&locationId=&geoId=102571732&f_TPR=r7200&distance=10&f_JT=F&position=1&pageNum=0'


axios(url)
    .then(response => {

        
        const html = response.data
        const $ = cheerio.load(html)

        const roleArray = []
        const companyArray = []
        // const postedArray = []
        const urlArray = []

        $('.base-search-card__info', html).each(function() { 
            const role = $(this).find('h3').text().trim().replaceAll(",", "")
            const company = $(this).find('h4').text().trim().replaceAll(",", "")
            const url = $(this).parent().find('a').attr('href')

            for (let i = 0; i < excludedWords.length; i++) {
                let currentWord = excludedWords[i]
                let wordSearch = role.search(currentWord);
            
                if (wordSearch < 0) {
                    excludedWordCounter += 1
                } else {
                    excludedWordCounter += 0
                }

            }

            if (excludedWordsState === 1 && excludedWordCounter === excludedWords.length) {
                console.log(role)
                console.log(company)
                console.log(url)
                console.log('------------------------------------------------------------------------')
                writeStream.write(`${role}, ${company}, ${url} \n`)
            } else if (excludedWordsState === 0) {
                writeStream.write(`${role}, ${company}, ${url} \n`)
            }

            excludedWordCounter = 0;
            
        }) 

        console.log('DONE')


    }).catch(err  => console.log(err))

    // app.listen(PORT, () => console.log(`server running on PORT ${PORT}`)) // NOTE THE BACKTICK FOR TEMPLATE LITERAL TO WORK (KEY ABOVE TAB)

    console.log('giddyup')
