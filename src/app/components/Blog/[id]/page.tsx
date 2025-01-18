'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Link from "next/link";

// Define your types for blog and comment data
interface Blog {
  id: number;
  title: string;
   image: string;
  content: string;
 
}

interface Comment {
  id: number;
  text: string;
  userName: string;
  timestamp: string;
}

interface Params {
  id: string;
}

interface PageProps {
  params: Promise<Params>;
}


const BlogDetails = ({ params }: PageProps) => {
  console.log("params === ", params)
  // const id = await params; // Await the Promise to get the resolved value
  // console.log(id.id); // Access the id after Promise resolves
  const [id, setId] = useState<string | null>(null); // State to store the resolved id
  const [blog, setBlog] = useState<Blog | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [userName, setUserName] = useState(""); // To store the name of the person commenting
  const [emoji, setEmoji] = useState(""); // To store the emoji selected

  const [resolvedParams, setResolvedParams] = useState<Params | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchParams = async () => {
      const resolvedParams = await params; // Await the Promise to get the resolved value
      setId(resolvedParams.id); // Set the id once resolved
    };

    fetchParams();
  }, [params]);




  // Simulate blog data fetching
  useEffect(() => {
    if (id) {
      const Blogs: Blog[] = [
        // Add your blog data here
        {
          id: 1,
          title: "Benefits Of Sunlight",
          content: `Benefits of sunlight

Of all the health benefits of sunlight, initiating the process of producing
 vitamin D in the body may be the best known. When UVB rays hit human skin, 
they interact with the 7-DHC protein there to produce vitamin D3.

People can get vitamin D from their diet and supplements, but sunlight is 
an important source of this essential nutrient. Vitamin D is necessary for 
key biological processes to take place in the body. Its benefits includeTrusted Source:

supporting healthy bones
managing calcium levels
reducing inflammation
supporting the immune system and glucose metabolism
Researchers have noted a link between exposure to the sun and lower blood 
pressure levels, with reduced death rates from cardiovascular issues. 
They suggest that exposure to sunlight triggers the skin to release stores 
of nitrogen oxides, which cause arteries to dilate, lowering blood pressure, 
and may reduce the impact of metabolic syndrome.

According to other research, increased sun exposure may also protect people from
the following diseases:

1.type 1 diabetes
2.multiple sclerosis (MS)
3.several forms of cancer, including colon, breast, and prostate cancer and non-Hodgkin lymphoma

Sunlight also supports better sleep and sets people’s circadian rhythms by regulating the levels of serotonin and melatonin.

Learn more about the health benefits of sleep here.

Being in the sun generally makes people feel good, and there are many scientific reasons for this effect.

One of these is that exposure to UVB rays causes human skin to produce beta-endorphins, which are hormones that reduce pain. Their other benefits include:

1.promoting a sensation of well-being and improving mood
2.boosting the immune system
3.relieving pain
4.promoting relaxation
5.helping wounds heal
6.helping people feel more alert
7.increasing job satisfactionTrusted Source, when a person’s workplace has access to sunlight
reducing depression
`,
          image: "/sun.jpg",
        },
        {
          id: 2,
          title: "Benefits of Wearing Hijab",
          content: `Benefits of wearing hijab

The hijab is a headscarf worn by Muslim women as a symbol of modesty, privacy, and religious faith. While it is often viewed as a controversial symbol in Western society, wearing a hijab has numerous benefits for Muslim women. In this article, we will explore some of the benefits of wearing a hijab.

Religious Obligation:

For many Muslim women, wearing a hijab is a fundamental part of their religious identity. By fulfilling this obligation, they are expressing their commitment to their faith and preserving their dignity. In addition, the hijab can serve as a reminder of God's presence and the importance of modesty in Islam. 
The Quran states that women should cover their hair and dress modestly to preserve their dignity and protect themselves from harassment (Quran 24:31). By wearing a hijab, Muslim women are fulfilling a religious duty and expressing their commitment to their faith.
However, it is important to note that not all Muslim women choose to wear a hijab, and there are varying interpretations of what is required in terms of modest dress. Some women may wear a headscarf but not cover their face or hands, while others may choose to wear loose clothing that covers their entire body. Ultimately, the decision to wear a hijab is a personal one and should be respected.

Increased Self-Esteem:

Wearing a hijab can have positive psychological effects on Muslim women, including increased self-esteem and confidence. This may be due to the sense of identity and belonging that comes from wearing a hijab. In addition, the hijab can serve as a way to express one's personal style and creativity, as there are many different styles and colors to choose from.
However, it is important to note that wearing a hijab is not a cure-all for low self-esteem or body image issues. It is just one factor among many that can contribute to a person's sense of self-worth.
A study by Aisha K. Gill (2002) found that wearing a hijab can also have a positive impact on body image and self-esteem. Gill argues that the hijab can serve as a "shield" against the objectification of women's bodies in Western society, allowing Muslim women to feel more secure and confident in their appearance.

Protection from Harassment:

One of the main reasons for wearing a hijab is to protect Muslim women from harassment and unwanted attention. 
A study by Mona M. Amer and Rania A. Amer (2019) found that Muslim women who wear a hijab are more likely to use religious coping mechanisms to deal with discrimination and harassment. The authors argue that the hijab can serve as a "protective shield" against the negative effects of discrimination and marginalization.
However, it is important to note that wearing a hijab does not guarantee protection from harassment, and many Muslim women continue to face discrimination and violence despite wearing a headscarf.

Community and Solidarity:

Wearing a hijab can foster a sense of community and solidarity among Muslim women. By wearing a hijab, Muslim women are signaling their membership in a larger religious community and expressing solidarity with other Muslim women. This can be particularly important for Muslim women living in Western societies, where they may face discrimination and marginalization.
Asifa Quraishi-Landes (2011) argues that wearing a hijab can serve as a way for Muslim women to connect with other Muslim women and build a sense of community and solidarity. Quraishi-Landes notes that wearing a hijab can also be a way for Muslim women to assert their agency and challenge negative stereotypes about Muslim women in Western society.
Wearing a hijab has numerous benefits for Muslim women, including fulfilling a religious obligation, increased self-esteem, protection from harassment, and fostering a sense of community and solidarity. While it may be viewed as a controversial symbol in Western society, it is important to recognize the positive effects that wearing a hijab can have on Muslim women. By understanding and respecting the hijab as an important aspect of Muslim women's identity and faith, we can promote greater inclusivity, diversity, and acceptance within our communities. This can lead to more meaningful and positive interactions between individuals of different backgrounds, as well as a deeper appreciation for the richness and complexity of Muslim cultures and traditions. It is important to recognize that the hijab is not a symbol of oppression, but rather a personal choice and a form of expression for many Muslim women.
 By embracing and celebrating these differences, we can work towards a more equitable and just society for all.

Sources:

Religious Obligation:
Quran 24:31
Sahih Al-Bukhari 5630
Sahih Muslim 2128

Increased Self-Esteem:
Ahmed, H. (2007). Muslim Women and Modesty: A Qualitative Exploration. Mental Health, Religion & Culture, 10(2), 167-178. doi:10.1080/13674670701209754
Al-Hakeem, N. (2017). The Hijab, Women and Body Image: A Qualitative Study. Journal of Muslim Mental Health, 11(2), 13-27. doi:10.3998/jmmh.14912984.0011.202

Protection from Harassment:
Al-Fadhli, S. (2018). Is Wearing the Hijab an Effective Strategy for Reducing Sexual Harassment? The Case of Kuwait. International Journal of Sociology and Social Policy, 38(9-10), 897-913. doi:10.1108/IJSSP-11-2017-0185
Kadir, F. A., & Lee, S. K. (2018). Veiling Practices and Experiences of Muslim Women in a Western Context. Journal of Muslim Minority Affairs, 38(4), 538-555. doi:10.1080/13602004.2018.1495948

Community and Solidarity:
Baydoun, N., & Janssen, J. (2019). "My Hijab Is My Crown": Exploring the Meanings and Experiences of Muslim Women Who Wear the Hijab in Western Contexts. Journal of Muslim Minority Affairs, 39(1), 26-42. doi:10.1080/13602004.2019.1571395
Sirin, S. R., & Fine, M. (2007). Hyphenated selves: Muslim American youth negotiating identities on the fault lines of global conflict. Applied Developmental Science, 11(3), 151-163. doi:10.1080/10888690701454223`,
          image: "/hijab.jpg",
        },
        {
          id: 3,
          title: "Benefits of Namaz",
          content: `Top surprising benefits of Namaz

The customary prayers of Muslims (Namaz), where physical movements of prayers (Sala’at) have been beautifully conglomerated
 with spiritual exercise, result in many surprising health and medical benefits. Namaz is the prescription from Allah for better
 health and fitness, who offers it regularly. Thus, it is a natural way to keep oneself healthy. One can get the benefits of Namaz
 only if it is offered as they have been ordered by Allah and Prophet Muhammad (PBUH). Namaz (Sala’at) should be offered coolly,
 calmly, religiously, and spiritually to maximise its benefits.

Health benefits of Ablution/Wudu/Wuzzo:

1.Wudu (Ablution) with water where one washes his hands, face, and feet region prevents germs from the body, thus promoting good health.
2.Ablution (Wuzzo) stimulates biological active spots similar to Chinese Reflex-Therapy, which has beneficial therapeutic effects on the hands, face, and feet region.
3.Ablution helps to relax the nervous system and eases tension, stress, and anxiety. Also read: Natural cure for Anxiety.
4.Washing hands five times a day (excluding washing before dietary intake) before Namaz means an effective way to keep germs away from the body.
5.Hand washing is an efficient way to prevent the spread of germs.
6.Gargling during ablution (Wudu) is very important as it helps to remove germs, allergens, and dust particles.
7.Gargling with plain water reduces the chances of the common cold to a greater extent, contributing to health and hygiene. Gargling also reduces viral respiratory infections and sore throat. Gargling ensures the reduction in bad breath, too.
8.Nose cleansing during Wuzzo removes dust, allergens, and contaminated matter. Nose cleaning with plain water helps to minimise infections such as flu, sinusitis, cold, and chest infections.
9.Nasal cleaning with water overcomes nasal congestion and clears sticky matter in the nose.
10.Nasal cleaning helps to treat allergic rhinitis, is suitable for nasal dryness, and improves breathing.
11. Face washing during ablution is beneficial for refreshing and improving the facial complexion.
12.Face washing reduces the impact of oily skin and retarded the growth of acne, pimples, wrinkles, and other facial spots.
13.Ears cleaning during ablution is quite effective in preventing wax accumulation. Cleaning the ear with wet fingers five times a day is also suitable for removing dust and germs from the outer region of the ears.
14.Washing the feet during Wuzo helps to clean dirt and fungus. It also acts like acupressure while fingers pass through the toes’ bottom area. Rubbing the toes with fingers is also good in case of diabetes and removing pain from the body. As many Accu points are present in the upper and lower parts of the regions, pressing these during ablution is helpful in curing back pain, arthritis joint pain, etc.
15.Offering Namaz (Sala’at) has many benefits, including spiritual, religious, physical, mental, social, economic, social, etc.
16.Namaz is highly beneficial to activate all seven Chakras, per the Yogic philosophy.

Namaz and Yoga:

17. There is an excellent correlation between Namaz and Yoga. Yoga rejuvenates the mechanism of body and mind. Yoga Therapy is a refreshing process and a cost-effective solution; try to find out the root cause of diseases. It helps restore harmony among various lifestyle components- physical, social, emotional, spiritual, mental, and psychological. The basic concept of Yoga is to relish and cherish life with exhilarating excitement. The system provides psychological and emotional well-being. Drugless therapies enhance the sustainable and functional ability of the body. The same case is also with Namaz. 
Yoga and Namaz are certainly a substitute for stress and disease-free personality.There are many yoga postures which represent namaz, viz. Vajrasana, Tadasana, Padhastasana, Yoga nidra, etc.


Namaz is the finest form of meditation:

18. Namaz is one of the best forms of meditation or Dhyan from a Yogic point of view, where the person unilaterally surrenders to Allah. Meditation is defined as the uninterrupted flow of mind towards a particular object. Namaz is one of the best stress buster and tension reliever modules. Namaz (Salaat) is the perfect example of meditation where the performer thinks only and only about Allah. Thus, Namaz provides the ultimate satisfaction and peace to the mind, thus saving you from many diseases and disorders. It enhances your concentration and reduces the level of depression. Namaz helps to develop a favourable milieu around the Namazi.
Namaz and physical health benefits

19. Namaz has multiple many health and fitness benefits. Some of the significant physical health benefits are as follows:

Namaz is one of the essential means of health, happiness, and harmony.
Offering regular Namaz keeps one fit and healthy by burning extra calories, thereby losing weight. Namaz is one of the effective ways of weight loss as well as to control obesity.
Namaz stretches your muscles and helps to provide a toned body.
It is good to overcome arthritis as Namaz enhances the body’s flexibility and reduces stiffness.
Namaz is an excellent source to balance the body’s Anabolic and Catabolic biochemical processes.
Namaz is good for the heart, brain, and the entire body.
Standing posture in Namaz (Qiya’m) ensures proper blood flow in the lower portion of the body. It is also suitable for strengthening the leg muscles.

Health benefits of Ruk’u:

20. The forward bending position of Namaz (Ruk’u) is suitable for your lower vertebral column. It helps to ease your back pain, as per Yogic philosophy. Doing Ruku properly helps to control backache and vertebral column-related diseases. Namaz Ruku effectively develops shoulder, elbow, wrist, knee, and ankle flexibility. Ruku exerts abdominal pressure, thereby easing constipation and peristaltic movements. During Ruku, the kidney experiences a sort of massage, thus helpful to kidney problems.

Health benefits of Sajdah:

21. During Sajdah, one sits in Vajrasana, an essential yoga pose from a health point of view. Vajrasana strengthens the thigh and calf muscles. It is suitable for digestion and keeps your spine firm and erect. Sajdah is beneficial in properly functioning the brain, lungs, body muscles, joints, and entire vertebral column. Sajdah helps to maintain smooth blood to the brain region and also stimulates the master gland, the pituitary gland, as the pineal gland. Sajdah reduces the chances of brain haemorrhage and headache due to smooth blood flow to the head region. While performing Sajdah, the toes are experiencing acupressure, which is good for better body health, especially for body pains.

Health benefits of Salaam (Neck Yoga):

22. Salam is an excellent form of neck and upper vertebra exercise. Namaz’s Salam is the Griva-Sakti-vikasaka (Strengthening the Neck) of Yogic Sukshma Vyayama, which helps loosen the neck joints and helps relax the shoulder and upper back muscles. Salam helps to refresh all the nerves that pass through the neck, thus good in case of headache and migraine.`,
          image: "/namaz.jpg",
        },

        {
          id: 4,
          title: "Benefits Of Honey",
          content: `Benefits of Honey

Honey is rich in nutrients and antioxidants, has antibacterial properties, and can play a role in diabetes management as part of a balanced diet. But that’s not all.
Honey is a syrupy liquid that honeybees make from plant nectar. It is a common ingredient in many foods and is available in many forms.
The product also has several potential health benefits and plays a role in many home remedies and alternative medicine treatments.

Here are 7 unique health benefits of honey.

1. Contains a variety of nutrients
One tablespoon, or 20 grams (g) of honey contains (1Trusted Source):

Calories: 61
Fat: 0 g
Protein: 0 g
Carbs: 17 g
Fiber: 0 g
Riboflavin: 1% of the Daily Value (DV)
Copper: 1% DV
Honey is essentially pure sugar, with no fat and only trace amounts of protein and fiber. It contains small amounts of some nutrients, but most people typically don’t consume enough honey for it to be a significant dietary source of vitamins and minerals.

Still, it’s worth noting that honey is rich in health-promoting plant compounds known as polyphenols.


2. Rich in antioxidants
Minimally-processed honey contains many important bioactive plant compounds and antioxidants, such as flavonoids and phenolic acids. Darker varieties tend to offer more antioxidants than lighter varieties (2Trusted Source).
Antioxidants help neutralize reactive oxygen species (ROS) in your body, which can build up in cells and cause damage. This damage can contribute to conditions like premature aging, type 2 diabetes, and heart disease (2Trusted Source).
As such, many of honey’s health benefits are attributed to its antioxidant content.


3. Better for blood sugar levels than regular sugar
Regarding blood sugar management, honey may offer some slight benefits over regular sugar.
Although honey raises your blood sugar level just like other types of sugar do, the antioxidants it contains may help protect against metabolic syndrome and type 2 diabetes.
Researchers have found that honey may increase adiponectin levels, a hormone that reduces inflammation and improves blood sugar regulation. There’s also evidence that daily honey intake may improve fasting blood sugar levels in people with type 2 diabetes. (3Trusted Source).
However, while honey may be slightly better than refined sugar for people with diabetes, people should consume it in moderation (4).
It’s also important to know that some producers dilute honey with plain syrup. Although honey adulteration is illegal in most countries, it remains a widespread problem (5Trusted Source).


4. May improve heart health
Honey may also help prevent heart disease. According to one review, honey may help lower blood pressure, improve blood fat levels, regulate your heartbeat, and prevent the death of healthy cells — all factors that can improve your heart function and health (6Trusted Source).
One observational study, including over 4,500 people over 40 associated a moderate honey intake with a lower risk of high blood pressure among women. A rodent study also showed that honey helped protect the heart from oxidative stress (7Trusted Source, 8Trusted Source).
Additionally, raw honey typically contains propolis, a resin that bees produce from sap-producing trees and similar plants. Propolis may improve cholesterol and triglyceride levels (9Trusted Source).
All told, there’s no long-term human study available on honey and heart health. More research is needed to understand honey’s effects on heart health better.


5. Promotes burn and wound healing
There is a historical precedent for the use of topical honey treatment for wound and burn healing. The practice is still common today.
A review of 26 studies on honey and wound care found it most effective at healing partial-thickness burns and wounds that have become infected after surgery (10Trusted Source).
Manuka honey, specifically, may have positive applications in burn treatments. However, if you have a severe burn, home remedies are not a viable substitute for emergency care, and you should seek medical attention immediately (11Trusted Source).
Researchers theorize that honey’s healing powers come from its antibacterial and anti-inflammatory effects (12Trusted Source).


6. May help suppress coughing in children
Coughing is a common problem for children with upper respiratory infections. These infections can affect sleep and quality of life for children and parents.
One review of several studies on honey and cough in children found that honey appears more effective than diphenhydramine for cough symptoms. It may also help reduce cough duration (13Trusted Source).
Another review noted that it may also improve sleep quality among children with coughs, as well as their parents. Further, unlike some cough medicines, honey doesn’t have any side effects (14Trusted Source).
However, never give honey to children under 1 year of age due to the risk of botulism.


7. Easy to add to your diet
Honey is often easy to add to your diet. To get a small boost of antioxidants from honey, you can use it any way you’d typically use sugar. It’s excellent for sweetening plain yogurt, coffee, or tea. You can also use it in cooking and baking.
However, remember that honey is a type of sugar, so consuming it will cause your blood sugar levels to rise. Eating large quantities of honey, especially consistently over a long period, can contribute to weight gain and increase your risk of diseases like type 2 diabetes or heart disease (15Trusted Source).

What are the benefits of honey?
As discussed before, the main benefits of eating honey in moderation may include:

blood pressure management
cholesterol management
wound healing when used topically
cough suppression
polyphenol content, which is thought to aid in digestion and have other health benefits
antioxidant content, which fights free radicals`,
          image: "/honey.jpg",
        },

        {
          id: 5,
          title: "Tree is blessing",
          content: `Benefits of trees

1.Trees combat climate change:
Excess carbon dioxide (CO2) is building up in our atmosphere, contributing to climate change. Trees absorb CO2, removing and storing the carbon while releasing oxygen back into the air. In one year, an acre of mature trees absorbs the same amount of CO2 produced when you drive your car 26,000 miles.

2.Trees clean the air:
Trees absorb odors and pollutant gases (nitrogen oxides, ammonia, sulfur dioxide and ozone) and filter particulates out of the air by trapping them on their leaves and bark.

3.Trees provide Oxygen:
Trees absorb odors and pollutant gases (nitrogen oxides, ammonia, sulfur dioxide and ozone) and filter particulates out of the air by trapping them on their leaves and bark.

4.Trees cool the streets and the city:
Average temperatures in Los Angeles have risen 6°F in the last 50 years as tree coverage has declined and the number of heat-absorbing roads and buildings has increased. Trees cool the city by up to 10°F, by shading our homes and streets, breaking up urban “heat islands” and releasing water vapor into the air through their leaves.

5.Trees conserve energy:
Three trees placed strategically around a single-family home can cut summer air conditioning needs by up to 50 percent. By reducing the energy demand for cooling our houses, we reduce carbon dioxide and other pollution emissions from power plants.

6.Trees save water:
Shade from trees slows water evaporation from thirsty lawns. Most newly planted trees need only fifteen gallons of water a week. As trees transpire, they increase atmospheric moisture.

7.Trees help prevent water pollution:
Trees reduce runoff by breaking rainfall thus allowing the water to flow down the trunk and into the earth below the tree. This prevents stormwater from carrying pollutants to the ocean. When mulched, trees act like a sponge that filters this water naturally and uses it to recharge groundwater supplies.

8.Trees help prevent soil erosion:
On hillsides or stream slopes, trees slow runoff and hold soil in place.

9.Trees shield children from ultra-violet rays:
Skin cancer is the most common form of cancer in the United States. Trees reduce UV-B exposure by about 50 percent, thus providing protection to children on school campuses and playgrounds - where children spend hours outdoors.

10.Trees help reduce noise:
Trees cut down on noise pollution by providing a buffer from cars, machinery, and other people.


`,
          image: "/tree.jpg",
        },

        {
          id: 6,
          title: "Benefits Of Reading Quran Pak",
          content: `Benefits of reading Quran Pak

In this blog post, we will explore the various benefits of reading the Quran, including scientific insights, spiritual enlightenment, improved health, and much more. It explores the multifaceted benefits of reading the Quran, spanning spiritual enlightenment, scientific insights, health improvements, and educational enrichment.
Encouraging consistent daily reading, particularly at night and after Fajr prayer, it underscores the rewards and blessings associated with Quranic recitation, including elevated status in paradise and intercession on Judgment Day. Finally, the post recommends online Quranic courses for those seeking further guidance and mastery in Quranic studies.
The Quran is a book of guidance and wisdom, and its teachings have been appreciated by millions of people around the world for centuries. Reading the Quran is not just a religious duty, but it also offers numerous benefits that extend beyond spirituality. 

Benefits of Reading the Quran:

Reading the Quran has many benefits, including connecting with Allah and gaining knowledge and wisdom. It also has scientific advantages, such as improving cognitive abilities and promoting mental well-being.

Physically, it can improve posture and hand-eye coordination. Consistent reading leads to a deeper understanding of Islam’s teachings and brings peace in both this life and the afterlife.

Are you ready to experience the countless benefits of reading the Quran? Enroll in our online Quran recitation course at Riwaq Al-Quran and start your journey toward spiritual, mental, and physical well-being today!

Spiritual Benefits of Reading the Quran:

The Quran holds great spiritual significance for Muslims all over the world, and that explains why The Quran is important To Muslims.. Reading the Quran not only strengthens one’s connection with their faith but also brings about numerous spiritual benefits.

1. Increased tranquility: 
The verses of the Quran have a soothing effect on the heart and mind, bringing a sense of peace and tranquility to those who read it regularly.

2. Strengthened faith:
Through its profound wisdom and guidance, reading the Quran helps individuals strengthen their faith in Allah and reinforces their belief in His divine plan.

3. Purification of the soul:
The Quran serves as a source of purification for believers by offering solace during times of hardship, helping them overcome challenges, and guiding them toward righteousness.

Scientific Benefits of Reading the Quran:

Reading the Quran not only holds spiritual significance, but it also offers scientific benefits that have been acknowledged by researchers. Here are some scientifically proven advantages of reading the Quran:

1. The Prevalence of Scientific Miracles:
The Quran contains information about scientific concepts that were not known at the time of its revelation, such as the Theory of Relativity, the Big Bang Theory, genetics, black holes, and more. This demonstrates the compatibility between the Quran and science.

2. Inspiration for Scientific Research:
The Quran’s verses often encourage contemplation and exploration of the natural world, inspiring Muslims to pursue scientific knowledge and contribute to advancements in various fields.

3. Integration of Faith and Science:
Reading the Quran can help individuals find harmony between their faith and scientific understanding, fostering a holistic worldview that embraces both religious beliefs and scientific principles.

Additionally, it can promote critical thinking and encourage Muslims to question and seek knowledge, thereby contributing to scientific progress.

Health Benefits of Reading the Quran
In addition to its spiritual significance, reading the Quran also provides various health benefits that contribute to overall well-being and a positive mindset.

1. Stress Reduction:
Research suggests that reciting and contemplating upon the verses of the Quran can help reduce stress levels. The rhythmic tone and soothing melodies in its recitation have a calming effect on both mind and body, promoting relaxation and reducing anxiety.

2. Cognitive Enhancement:
Studies show that regular Quranic reading improves cognitive function, including attention span, memory retention, and problem-solving skills. The complex linguistic structure of Arabic used in the Quran enhances brain activity, stimulating intellectual growth.

3. Emotional Well-being: 
Engaging with the words of Allah through Quranic reading stimulates positive emotions such as happiness, gratitude, and contentment. This emotional well-being is linked to improved mental health outcomes like reduced symptoms of depression and enhanced overall life satisfaction.

Benefits of Reading the Quran with Tajweed:

Reading the Quran with Tajweed, or proper pronunciation and recitation rules, has numerous benefits for individuals seeking a deeper understanding of the sacred text. Here are some key advantages:

1. Enhanced Recitation:
When reading the Quran with Tajweed, individuals learn to pronounce each letter accurately and apply correct intonation. This leads to improved recitation skills and a more melodic rendition of the verses.

2. Clearer Understanding:
Tajweed helps learners grasp the meaning behind each word in the Quran. By following proper pronunciation guidelines, readers can fully comprehend the message conveyed by Allah (SWT) in His book.

3. Spiritual Connection:
The meticulous study of Tajweed fosters a stronger spiritual connection between readers and their Creator. It allows them to engage deeply in prayer and reflection as they delve into the divine words.

Start your journey towards a deeper spiritual connection with Riwaq Al-Quran’s online Tajweed classes. Join us today to perfect your recitation and understand the Quran like never before!

Benefits of Reading the Quran with Translation:

Reading the Quran with a translation is a powerful method for enhancing our comprehension and connection with the words of Allah. Here are some significant advantages of reading the Quran with a translation:

1. Enhanced comprehension:
Translations help individuals comprehend the Quran’s message by providing meanings in their preferred language, allowing them to connect with its teachings on a deeper level.

2. Cultural and historical insights:
Translations often include footnotes or explanations that provide valuable context about the cultural and historical background of the Quran, enriching one’s understanding of its verses.

3. Personal growth and reflection:
Reading the Quran with translation encourages introspection and personal growth, as it facilitates contemplation of the Quran’s timeless wisdom, moral guidance, and universal principles.

Benefits of Reading the Quran Everyday
The Benefits of Reading the Quran Every Day Reading the Quran daily can bring numerous benefits to individuals, both spiritually and emotionally. Here are some important advantages: 

1. Spiritual Guidance:
Consistent reading of the Quran helps individuals connect with their faith and receive spiritual guidance, resulting in a stronger relationship with Allah.

2. Mental Peace and Clarity:
Regularly engaging with the Quran can bring a sense of tranquility and clarity, helping to reduce stress, anxiety, and other mental burdens.

3. Increased Knowledge and Understanding:
Consistently reading the Quran improves one’s understanding of Islamic principles, teachings, and stories, leading to a deeper appreciation of religion and its importance in everyday life.

Achieve mastery in recitation and receive an Ijazah with Riwaq Al-Quran’s Online Ijazah Course. Learn from certified teachers and fulfill your dream of becoming an authorized Quranic reciter.

Benefits of Reading the Quran at Night :

Reading the Quran at night offers unique advantages that can positively impact individuals’ spiritual growth. Here are some notable benefits:

1. Calmness and Reflection:
Reading the Quran at night fosters a serene ambiance, nurturing deep introspection and self-reflection. This facilitates a connection with one’s inner being and reinforces their bond with Allah.

2. Better Retention:
Studies suggest that reading before sleep enhances memory retention. By reading the Quran at night, individuals may better absorb its teachings, allowing for long-term recollection and application in their lives.

3. Protection and Blessings:
It is believed that reciting the Quran at night invites protection from evil influences and invites blessings into one’s life, fostering a sense of security and spiritual well-being.

Benefits of Reading the Quran after Fajr 
Engaging with the Quran after the Fajr prayer holds great significance for Muslims. Here are some significant benefits:

1. Sense of Achievement:
Starting the day with the recitation of the Quran after Fajr prayer establishes a productive and rewarding routine, leading to a sense of accomplishment and motivation throughout the day.

2. Increased Focus and Concentration:
Reading the Quran after Fajr prayer, when the mind is fresh and undistracted, allows for enhanced focus, attentiveness, and absorption of its teachings.

3. Barakah (Blessings) in the Day:
It is believed that reciting the Quran after Fajr brings an abundance of blessings (barakah) into one’s day, setting a positive tone and fostering a pious mindset to tackle challenges and make the most of the day.

Refine your Quranic recitation skills with Riwaq Al-Quran’s Online Qirat Course. Learn from expert instructors and unlock your full potential in the beautiful art of Quranic recitation.

Rewards for Reading the Quran:

Reading the Quran not only brings immense spiritual benefits but also offers various rewards. Here are some significant rewards that one can attain by regularly reading the Quran:

1. Increased Rewards in This World and the Hereafter: 
Every letter recited from the Quran carries multiple rewards, and these rewards are multiplied even further when reading with understanding and reflection. The more time spent engaging with the words of Allah, the greater the blessings received in this world and the hereafter.

2. Intercession on Judgment Day:
The Prophet Muhammad (peace be upon him) said that those who read and memorize the Quran will be granted intercession on Judgment Day, where they can plead for forgiveness on behalf of their loved ones or themselves.

3. Elevated Status in Paradise:
According to Islamic tradition, those who consistently read and implement what is learned from the Quran will have a special rank in paradise. This elevated status reflects a deep connection with Allah, leading to eternal happiness and tranquility.

Why Is Reading the Quran a Good Act of Worship?
Reading the Quran is considered a highly virtuous act of worship for several reasons.

Firstly, it allows individuals to connect with Allah and seek guidance and wisdom from His words.

Secondly, it is seen as a means of spiritual purification and self-improvement, as it encourages reflection and contemplation on life’s purpose and moral teachings.

Additionally, reading the Quran exemplifies reverence and love for Allah, deepening one’s faith and strengthening their relationship with Him.

Does Reading the Quran Remove Sins?
Yes, reading the Quran has immense benefits when it comes to seeking forgiveness for sins committed.

The Prophet Muhammad (peace be upon him) stated that recitation of the Quran acts as an expiation for one’s misdeeds.

By engaging with its verses sincerely and reflecting on their meanings, believers can find solace in knowing that Allah forgives those who repent and turn to Him through reading His sacred book.

How Many Good Deeds for Reading the Quran?
The reward gained from reading the Quran can differ due to factors like sincerity, effort, and understanding. Nevertheless, it is commonly believed that each letter of the Quran carries significant rewards.

Prophet Muhammad reportedly stated that for every letter read, a person will receive a reward multiplied by ten.

To maximize this honorable act of worship, it is crucial to approach recitation with respect and concentration, striving to comprehend and apply the teachings of the Quran.`,
          image: "/pak.jpg",
        },
      ];

      const blogData = Blogs.find((blog) => blog.id.toString() === id);
      if (blogData) {
        setBlog(blogData);
        setLoading(false); // Set loading to false once data is fetched
      }
    }
  }, [id]);

  if (!blog) return <div>Loading...</div>;

  const handleAddComment = () => {
    if (newComment.trim() && userName.trim()) {
      const newCommentObj: Comment = {
        id: Date.now(),
        text: emoji ? `${emoji} ${newComment}` : newComment, // Add emoji only if selected
        userName: userName,
        timestamp: new Date().toLocaleString(),
      };
      setComments((prevComments) => [newCommentObj, ...prevComments]); // Add new comment at the top
      setNewComment(""); // Clear input after adding
      setUserName(""); // Clear name field
      setEmoji(""); // Clear emoji selection
    }
  };

  return (
    <div>
       <header className="text-gray-600 body-font">
        <div className="flex flex-col md:flex-row h-auto md:h-[50px] bg-white justify-between items-center p-5 md:p-10 sticky top-0 z-50">
          
          {/* Logo Section */}
          <div className="flex flex-row gap-4 items-center w-full md:w-auto">
          <div className="text-white">
                <img src="/logo.png" alt="logo" className="w-12 h-10 md:w-12 md:h-10" />
              </div>
              <div className="flex text-[20px] md:text-[30px] font-bold text-red-950 items-center font-serif">
                Maheen Zehra Writes
              </div>
          </div>

          {/* Navigation */}
          <nav className="md:ml-auto flex flex-col font-serif  md:flex-row items-center text-base justify-center mt-4 md:mt-0 w-full md:w-auto">
            <ul className="flex flex-col md:flex-row gap-4 w-full md:w-auto text-center md:text-left">
              <li className="mr-5 hover:text-orange-500 text-black">
                <Link href="/">Home</Link>
              </li>
              <li className="mr-5 hover:text-orange-500 text-black">
                <Link href="/components/Blog">Blog</Link>
              </li>
              <li className="mr-5 hover:text-orange-500 text-black">
                <Link href="/components/About">About</Link>
              </li>
              <li className="mr-5 hover:text-orange-500 text-black">
                <Link href="/components/Contact">Contact</Link>
              </li>
              
            </ul>
          </nav>
        </div>
      </header>
      <div className="container mx-auto py-12 px-6">
        <h1 className="text-4xl font-serif  text-center font-bold text-gray-800">{blog.title}</h1>
        <div className="mt-6    items-center ">
          <div className="w-full md:w-1/2 max-w-[1000px] items-center text-center ml-56 bg-white ">
            <Image
              src={blog.image}
              alt={blog.title}
              width={1000}
              height={300}
              className="w-full  object-cover items-center text-center"
            />
           </div>
        

         <div>
            <p className="text-lg mt-6 font-serif">{blog.content}</p>
          
        </div>
      </div>
      </div>

      {/* Comment Section */}
      <div className="mt-12 mb-[50px] flex justify-center">
        <div className="w-full max-w-2xl">
          <h2 className="text-2xl font-bold text-gray-800 text-center">Your Feedback</h2>
          <div className="mt-4 flex space-x-4">
            <div className="w-full">
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full p-2 border rounded-md mb-2"
                placeholder="Your Name"
              />
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="w-full p-2 border rounded-md mb-2"
                placeholder="Add a comment"
              />
           
           
              <button
                onClick={handleAddComment}
                className="mt-2 bg-blue-500 text-white py-2 px-4 rounded-md"
              >
                Add Comment
              </button>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            {comments.map((comment) => (
              <div key={comment.id} className="border p-4 rounded-md shadow-md">
                <div className="flex justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="font-bold">{comment.userName}</span>
                    <span className="text-sm text-gray-500">{comment.timestamp}</span>
                  </div>
                  <button
                    onClick={() => {
                      const updatedComments = comments.filter(
                        (com) => com.id !== comment.id
                      );
                      setComments(updatedComments);
                    }}
                    className="text-red-500"
                  >
                    Delete
                  </button>
                </div>
                <div className="flex items-center">
                  {comment.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

  <footer className="bg-white text-black py-8">
  <div className="container mx-auto text-center px-4">
    
    {/* Logo Section */}
    <div className="flex flex-col md:flex-row gap-4 items-center justify-center mb-4">
    <div className="text-white">
                <img src="/logo.png" alt="logo" className="w-12 h-10 md:w-12 md:h-10" />
              </div>
      <div className="flex text-[20px] md:text-[30px] font-bold text-red-950 font-serif items-center">
        Maheen Zehra
      </div>
    </div>

    <p className="text-2xl mt-2 font-bold">Stay In Touch!</p>
    
    <div className="flex justify-center gap-6 mt-4 mb-4">
      <FaFacebook className="text-2xl hover:opacity-80" />
      <FaTwitter className="text-2xl hover:opacity-80" />
      <FaInstagram className="text-2xl hover:opacity-80" />
      <FaLinkedin className="text-2xl hover:opacity-80" />
    </div>

    {/* Footer Bottom Section */}
    <p className="text-sm text-red-950">
      &copy; {new Date().getFullYear()} All rights reserved.
    </p>

  </div>
</footer>


    </div>
  );
};

export default BlogDetails;