using Domain;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            if (context.Activities.Any()) return;
            
            var activities = new List<Activity>
            {
                new Activity
                {
                    id = 1,
                    title = "A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.",                  
                    description = "A Real Bitter Experience.",
                    image = "https://images.punkapi.com/v2/keg.png",
                    price = 19,
                    rating = 4.1,
                    category = "Buzz",
                },
                new Activity
                {
                    id = 2,
                    title = "A titillating, neurotic, peroxide punk of a Pale Ale. Combining attitude, style, substance, and a little bit of low self esteem for good measure;",                  
                    description = "You Know You Shouldn't.",
                    image = "https://images.punkapi.com/v2/2.png",
                    price = 2.63,
                    rating = 4.2,
                    category = "Trashy Blonde",
                },
                new Activity
                {
                    id = 3,
                    title = "Japanese citrus fruit intensifies the sour nature of this German classic.",                  
                    description = "Japanese Citrus Berliner Weisse.",
                    image = "https://images.punkapi.com/v2/keg.png",
                    price = 22,
                    rating = 4.6,
                    category = "Berliner",
                },
                new Activity
                {
                    id = 4,
                    title = "Our Unleash the Yeast series was an epic experiment into the differences in aroma and flavour provided by switching up your yeast.",                  
                    description = "Unleash the Yeast Series.",
                    image = "https://images.punkapi.com/v2/4.png",
                    price = 3.12,
                    rating = 4.3,
                    category = "Pilsen Lager",
                },

                new Activity
                {
                    id = 5,
                    title = "An Imperial Pilsner in collaboration with beer writers. Tradition. Homage. Revolution.",                  
                    description = "Bloggers' Imperial Pilsner.",
                    image = "https://images.punkapi.com/v2/5.png",
                    price = 4.54,
                    rating = 4.9,
                    category = "Avery Brown Dredge",
                },

                new Activity
                {
                    id = 6,
                    title = "An Imperial Black Belgian Ale aged in old Invergordon Scotch whisky barrels with mountains of raspberries, tayberries and blackberries in each cask.",                  
                    description = "Imperial Black Belgian Ale.",
                    image = "https://images.punkapi.com/v2/7.png",
                    price = 2.75,
                    rating = 4.5,
                    category = "AB:12",
                },

                new Activity
                {
                    id = 7,
                    title = "Re-brewed as a spring seasonal, this beer – which appeared originally as an Equity Punk shareholder creation.",                  
                    description = "Vibrant Hoppy Saison.",
                    image = "https://images.punkapi.com/v2/6.png",
                    price = 5.20,
                    rating = 5,
                    category = "Electric India",
                },

                 new Activity
                {
                    id = 8,
                    title = "Fake is the new black. Fake is where it is at. Fake Art, fake brands, fake breasts, and fake lager.",                  
                    description = "Bohemian Pilsner.",
                    image = "https://images.punkapi.com/v2/8.png",
                    price = 3.69,
                    rating = 4.8,
                    category = "Fake Lager",
                },

                 new Activity
                {
                    id = 9,
                    title = "Whisky cask-aged imperial scotch ale. Beer perfect for when the rain is coming sideways.",                  
                    description = "Whisky Cask-Aged Scotch Ale.",
                    image = "https://images.punkapi.com/v2/9.png",
                    price = 3.1,
                    rating = 3.9,
                    category = "AB:07",
                },

                 new Activity
                {
                    id = 10,
                    title = "Good old Bramling Cross is elegant, refined, assured, (boring) and understated.",                  
                    description = "Single Hop IPA Series - 2011.",
                    image = "https://images.punkapi.com/v2/10.png",
                    price = 4.85,
                    rating = 4.3,
                    category = "Bramling X",
                },

                  new Activity
                {
                    id = 11,
                    title = "The brainchild of our small batch brewer, George Woods. A dangerously drinkable milk sugar- infused Scotch Ale.",                  
                    description = "Milk & Honey Scotch Ale.",
                    image = "https://images.punkapi.com/v2/keg.png",
                    price = 15,
                    rating = 4.3,
                    category = "Misspent Youth",
                },
                new Activity
                {
                    id = 12,
                    title = "Running the knife-edge between an India Pale Ale and a Stout, this particular style is one we truly love.",                  
                    description = "Seasonal Black IPA.",
                    image = "https://images.punkapi.com/v2/12.png",
                    price = 2.95,
                    rating = 4.5,
                    category = "Arcade Nation",
                },
                new Activity
                {
                    id = 13,
                    title = "A deliciously robust, black malted beer with a decadent dark, dry cocoa flavour that provides an enticing backdrop to the Cascade hops.",                  
                    description = "Moustache-Worthy Beer.",
                    image = "https://images.punkapi.com/v2/13.png",
                    price = 3.65,
                    rating = 4.6,
                    category = "Movember",
                },
                new Activity
                {
                    id = 14,
                    title = "A fusion of caramel malt flavours and punchy New Zealand hops. A session beer you can get your teeth into.",                  
                    description = "Existential Red Ale.",
                    image = "https://images.punkapi.com/v2/14.png",
                    price = 3.8,
                    rating = 3.5,
                    category = "Alpha Dog",
                },

                new Activity
                {
                    id = 15,
                    title = "This recipe is for the Belgian Tripel base. A blend of two huge oak aged beers – half a hopped up Belgian Tripel, and half a Triple India Pale Ale.",                  
                    description = "An Epic Fusion Of Old Belgian, American New Wave, And Scotch Whisky.",
                    image = "https://images.punkapi.com/v2/15.png",
                    price = 2.95,
                    rating = 4.1,
                    category = "Mixtape 8",
                },

                new Activity
                {
                    id = 16,
                    title = "An avalanche of cross-continental hop varieties give this porter a complex spicy, resinous and citrusy aroma.",                  
                    description = "Dry-Hopped Aggressive Porter.",
                    image = "https://images.punkapi.com/v2/16.png",
                    price = 2.99,
                    rating = 3.9,
                    category = "Libertine Porter",
                },

                new Activity
                {
                    id = 17,
                    title = "Our sixth Abstrakt, this imperial black IPA combined dark malts with a monumental triple dry-hop, using an all-star team of some of our favourite American hops.",                  
                    description = "Imperial Black IPA.",
                    image = "https://images.punkapi.com/v2/17.png",
                    price = 6.2,
                    rating = 5,
                    category = "AB:06",
                },

                 new Activity
                {
                    id = 18,
                    title = "The levels of hops vary throughout the range. We love hops, so all four beers are big, bitter badasses.",                  
                    description = "Nesting Hop Bomb.",
                    image = "https://images.punkapi.com/v2/18.png",
                    price = 3.45,
                    rating = 4.6,
                    category = "Russian Doll - India Pale Ale",
                },

                 new Activity
                {
                    id = 19,
                    title = "We sent this beer to Norway where it was known as 'Hello, my name is Censored’. You can make up your own mind as to why.",                  
                    description = "Lingonberry Double IPA.",
                    image = "https://images.punkapi.com/v2/19.png",
                    price = 3.5,
                    rating = 4.4,
                    category = "Hello My Name Is Mette-Marit",
                },

                 new Activity
                {
                    id = 20,
                    title = "Imperial Wheat beer / Weizenbock brewed by a homesick German in leather trousers. Think banana bread, bubble gum and David Hasselhoff.",                  
                    description = "Imperial Wheat Beer",
                    image = "https://images.punkapi.com/v2/keg.png",
                    price = 18,
                    rating = 4.5,
                    category = "Rabiator",
                },
                
               
               
            };

            await context.Activities.AddRangeAsync(activities);
            await context.SaveChangesAsync();
        }
    }
}