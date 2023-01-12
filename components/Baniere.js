import React from 'react'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Pulse from 'react-reveal/Pulse';



function Baniere() {
  return (
<>
    <div className='bg-[#B2EBF2] p-4 w-full'>
    
    <div className='flex justify-between  mt-8 sm:grid sm:grid-rows-1 gap-4 p-4  '>
            <div className='w-full order-last sm:order-first'>
            <img src="banner1.png" width="100%"  alt="placehold images"/>

            </div>
            <div className='  p-4  w-full '>
                 <Pulse>
                <a href='#bienvenue' aria-hidden="true">
                <h1 className=' font-bold text-[60px] font-[Open Sans]  text-black flex justify-center items-center mb-4 sm:text-[40px]'>
                    Bienvenue au CEFPAMS
                </h1>
                </a>
                </Pulse>
                
                <p className='leading-7 text-black'>
                    
                    CEFPAMS est établissement de formation professionnelle, des petits métiers, des langues et d'appui scolaire basé au Tchad.
                    Il est structuré de façons à favoriser l'apprentissage concrets permettant aux apprenants d'acquérir le savoir et le savoir-faire pour exercer un métier.

                </p>

            </div>
        </div><Fade top>

</Fade>
    </div>

<h1 className='flex items-center justify-center text-center text-blue-900 font-[Inter] text-[60px] font-600  p-4' id='objectif'>Nos formations</h1>



<div className='flex justify-between  sm:grid sm:grid-rows-1 dark:bg-gray-900 dark:text-white gap-4 p-4 '>
    <Fade left>
    <div className='w-ful'>
    <img src="form1.jpeg" width="100%"  alt="placehold images"/>
    </div>
    </Fade>
    <Fade left>
        <div className='  p-4 '>
            <h1 className=' font-bold text-[30px] font-[Open Sans]  text-yellow-900 flex justify-center items-center mb-4'>Une formation en anglais</h1>
            <p className='font-[Open Sans] leading-9'>
            Communiquer dans une langue étrangère avec aisance et fluidité dans les situations concrètes de la vie courante et/ou professionnelle ou encore bien maîtrisée sa langue courante est indispensable pour un développement social intellectuel. Apprendre à bien parler une langue étrangère facilite donc une insertion socio-professionnelle et la vie entrepreneuriale.
            </p>
        </div>
    </Fade>
    <Fade left>
        <div className='block w-full p-6 bg-gray-800 border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
            <div>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-cyan-100 ">Formation en Français</h5>
            </div>
            <div>
                <p className='text-gray-400 font-[Open Sans] '>
                Les cours sont organisés en des cours pour les personnes nulles, débutantes et avancées en langue française peuvent se faire en collectivité (au centre) tout comme en particulier (à domicile ou au centre). Ils seront dispensés par niveau de la langue française en réalisant des évaluations individuelles au préalable.
Par niveau :<br/>
▪ Niveau 0 : Pour les personnes nulles<br/>
▪ Niveau 1 : Pour les personnes débutantes<br/>
▪ Niveau 2 : Pour les personnes avancées<br/>
                </p>
                
            </div>
            
        </div>
        </Fade>
        <Fade left>
        <div className='block w-full p-6 bg-gray-800 border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
            <div>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-cyan-100 ">Formation en Anglais</h5>
            </div>
            <div>
                <p className='text-gray-400  font-[Open Sans] '>
                    La formation en langue anglaise sera organisée en fonction de niveau déterminé par un test de positionnement réalisé avant l’inscription.
Les différents positionnements sont :                    <br/>

▪ Niveau : Débutant                    <br/>

▪ Niveau : intermédiaire                    <br/>

▪ Niveau : Avancé
                </p>
                
            </div>
            
        </div>
        </Fade>
        
</div>


<div className='flex justify-between  sm:grid sm:grid-rows-1 to-gray-100 gap-4 p-4  '>
    <Slide rigth>
    <div className='w-ful'>
    <img src="form2.png" width="100%"  alt="placehold images"/>
    </div>
    </Slide>
    <Slide rigth>
        <div className='  p-4 '>
            <h1 className=' font-bold text-[30px] font-[Open Sans]  dark:text-white text-cyan-900 flex justify-center items-center mb-4'>Formation en petits métiers</h1>
            <p className='font-[Open Sans] leading-7'>
            Former les jeunes à des petits métiers est un enjeu majeur pour lutter contre le chômage dans notre pays. De ce fait nous avons opté de créer la section 2 « Formation des petits métiers » afin de répondre à ce besoin. Par ailleurs, actuellement le Tchad fait face de manière générale à un défi de main-d’œuvre de qualité, donc nous formons les jeunes de façon qu’il soit directement opérationnel à la fin de formation.
<p>Nous proposons actuellement les formations suivantes :</p>
- Transformation des produits alimentaires <br/>
- Installation solaire <br/>
- Installation des antennes paraboliques <br/>
- Maintenance des ordinateurs <br/>
- Electricité bâtiment <br/>
- Infographie <br/>
- Menuiserie bois <br/>
- Fabrication de savon liquide et des gels hydroalcooliques <br/>
            </p>
        </div>
    </Slide>
</div>


<div className='flex justify-between  sm:grid sm:grid-rows-1 bg-gradient-to-r from-green-600 to-green-200 gap-4 p-4 '>
    <Fade left>
    <div className='w-ful'>
    <img src="form3.png" width="100%"  alt="placehold images"/>
    </div>
    </Fade>
    <Fade left>
        <div className='  p-4 '>
            <h1 className=' font-bold text-[30px] font-[Open Sans]  text-white flex justify-center items-center mb-4'>Tutorat Scolaire</h1>
            <p className='font-[Open Sans] leading-7 text-lg font-[600]'>
                L’école tchadienne vit au rythme de grandes difficultés. Parmi lesquelles nous pouvons relever la baisse du niveau, la démotivation des apprenants, l’insuffisance de la politique éducative et la défaillance du système éducatif tchadien. Au vu de ces difficultés, nous avons jugé nécessaire d’apporter une solution à notre manière en mettant en place cette section « Appui scolaire ».<br/>
CEFPAMS est aussi une école de cours de soutien et de renforcement pour les élèves du primaire jusqu’à terminale. Les cours seront organisés en cours particulier sur mesure, en cours collectif, cours en groupe de préparation d’examen, cours d’été, qui peuvent se dérouler à domicile ou au centre. Ces cours permettent d'acquérir la bonne méthode et de redonner confiance aux apprenants.
Les cours de soutien scolaire sont un accompagnement qui permet aux enfants de développer leur capacité afin de mieux répondre à des exigences de réussite qui sont de plus en plus fortes : BEF, BAC, intégrer la filière de son choix ou une grande école...
CEFPAMS est le premier centre de formation au Tchad qui propose du tutorat aux élèves. Ce format original et efficace permet à l’élève de développer sa propre autonomie, sans devenir dépendant du professeur. L’élève évolue dans un environnement de confiance et d'échange et profite de la dynamique du cours pour s’améliorer et devenir autonome.
La section soutien scolaire a pour mission d’aider les élèves à atteindre leur objectif scolaire, progresser dans une ou plusieurs matières, développer leur autonomie ou encore préparer une classe supérieure et/ou un examen, en matières principales en les proposant des solutions les plus adoptées avec de meilleurs enseignants.
Le soutien scolaire permet aussi aux élèves de dépasser les difficultés : <br/>
<p>
● Dans une ou plusieurs matières <br/>
● En méthodologie <br/>
● Avec le système scolaire dans son ensemble <br/>
● D’orientation.<br/></p>
<p>
Le soutien scolaire n'est pas là pour se substituer aux parents mais pour en prendre le relais.</p>
            </p>
        </div>
    </Fade>
</div>



<div className='flex justify-between  sm:grid sm:grid-rows-1 bg-gradient-to-r from-cyan-600 to-gray-100 gap-4  '>
    <Fade left>
    <div className='w-ful'>
    <img src="form4.png" width="100%"  alt="placehold images"/>
    </div>
    </Fade>
    <Fade left>
        <div className='  p-4 '>
            <h1 className=' font-bold text-[30px] font-[Open Sans]  text-white flex justify-center items-center mb-4'>Informatique</h1>
            <p className='font-[Open Sans] leading-8'>
            La formation en informatique est indispensable pour trouver du travail et évoluer professionnellement. Presque toutes les entreprises exigent que leurs employés puissent utiliser des ordinateurs. De plus en plus de postes nécessitent l'utilisation de l'outil informatique, pour cette raison nous avons pensé à mettre en place ladite formation dans le but de répondre à ce besoin si important. L'informatique permet véritablement d'accroître l'efficacité opérationnelle d'une société, en permettant d'améliorer sa réactivité.
Au sein de CEFPAMS, nous proposerons par étapes les formations en informatique suivantes :<br/>
▪ Outils bureautiques (pack office) <br/>
▪ Création de site web <br/>
▪ Développement des applications ou des logiciels <br/>
▪ Administrateur de réseau <br/>
▪ Autres
            </p>
        </div>
    </Fade>
</div>



<div className='flex justify-between  sm:grid sm:grid-rows-1 bg-gradient-to-r from-cyan-600 to-gray-100 gap-4  '>
    <Fade left>
    <div className='w-full'>
    <img src="form6.png" width="100%"  alt="placehold images"/>
    </div>
    </Fade>
    <Fade left>
        <div className='  p-4 '>
            <h1 className=' font-bold text-[30px] font-[Open Sans]  text-white flex justify-center items-center mb-4'>Formation professionnelle</h1>
            <p className='font-[Open Sans] leading-9'>
            Une formation professionnelle est le processus d'apprentissage qui permet à un salarié ou un demandeur d'emploi d'acquérir le savoir, le savoir-faire et le savoir-être nécessaires à l'exercice d'un métier ou d'une activité professionnelle. Pour répondre au mieux aux attentes des apprenants, nous proposons une formation associée à l’apprentissage d’un métier, basé sur la pratique et la maîtrise de la technique plutôt que sur la théorie et l’abstraction conceptuelle.
<p>Notre formation professionnelle s’adresse particulièrement à tous les adultes qui souhaitent approfondir leurs connaissances, leurs compétences ou leurs aptitudes professionnelles, dans le but d’élever leur qualification et d’évoluer dans leur carrière ou de se réorienter vers une nouvelle activité professionnelle. Il s’agit de la formation professionnelle continue qui avantage les salariés ou les demandeurs d’emploi.</p>
<p>
Un demandeur d’emploi ou un salarié peut demander de suivre à son initiative ou sur celle de l’employeur une formation professionnelle chez nous.</p>

            </p>
        </div>
    </Fade>
</div>



<div className="flex flex-col mb-8 mt-8 p-4">
              <div>
                <h2 className="mb-8 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                  Nos partenaires internationaux
                </h2>
                <p className="text-gray-900 dark:text-white text-[18px]">
                  Nos partenaires internationaux sont entre autres :
                </p>
                <ul className="list-disc text-[#849CD9] font-[700] text-[16px] ml-6 mt-1">
                  <li>Le Cnam</li>
                  <li>Centre d'Excellence de Formation Professionnelle (CEFP)</li>
                  <li>AMADEUS</li>
                  <li>Groupe Interval</li>
                </ul>
              </div>
              
            </div> 


</>
  )
}

export default Baniere