import Link from 'next/link'
import { AuthProvider, ProtectRoute } from '../auth/admin/auth'
import styles from '../../styles/layout.module.scss'
import { useState } from 'react'
import { useRouter } from 'next/router'

export default function Adminlayout({ children, page, props }) {
    const router = useRouter()
    const [show, setShow] = useState(false);

    return (
        <AuthProvider>
            <ProtectRoute>
                <div className={styles.container}>
                    <div className={`${show && styles.expand} ${styles.sidebar_sm}`}>
                        <button onClick={() => setShow(!show)} className="mt-4">
                            <svg width="45" height="33" viewBox="0 0 90 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M50.7519 67H0L35.8647 15H90L50.7519 67Z" fill="#FF6B6B"/>
                                <circle cx="25.5" cy="23.5" r="23.5" fill="url(#paint0_linear)"/>
                                <defs>
                                <linearGradient id="paint0_linear" x1="-10" y1="-16.5" x2="43.5" y2="-15.5" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#FFC700"/>
                                <stop offset="1" stopColor="#FFAE73" stopOpacity="0.85"/>
                                </linearGradient>
                                </defs>
                            </svg>
                        </button>
                        <div className="flex flex-col items-center text-2xl">
                            <Link href="/admin">
                                <a className={`${page === 'Overview' && styles.active} ${styles.nav_icon}`}>
                                    <svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.125 7.875V0C11.1914 0 12.2109 0.208008 13.1836 0.624023C14.1562 1.04004 14.9941 1.59961 15.6973 2.30273C16.4004 3.00586 16.96 3.84375 17.376 4.81641C17.792 5.78906 18 6.80859 18 7.875H10.125ZM7.875 18C6.80859 18 5.78906 17.792 4.81641 17.376C3.84375 16.96 3.00586 16.4004 2.30273 15.6973C1.59961 14.9941 1.04004 14.1562 0.624023 13.1836C0.208008 12.2109 0 11.1914 0 10.125C0 9.05859 0.208008 8.03906 0.624023 7.06641C1.04004 6.09375 1.59961 5.25586 2.30273 4.55273C3.00586 3.84961 3.84375 3.29004 4.81641 2.87402C5.78906 2.45801 6.80859 2.25 7.875 2.25V10.125H15.75C15.75 11.1914 15.542 12.2109 15.126 13.1836C14.71 14.1562 14.1504 14.9941 13.4473 15.6973C12.7441 16.4004 11.9062 16.96 10.9336 17.376C9.96094 17.792 8.94141 18 7.875 18Z" fill="#5B5B5B"/>
                                    </svg>
                                    <span className={styles.tooltiptext}>Overview</span>
                                </a>
                            </Link>
                            <Link href="/admin">
                                <a className={`${page === 'KOL Management' && styles.active} ${styles.nav_icon}`}>
                                    <svg width="27" height="20" viewBox="0 0 27 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.3026 3.78947C10.3026 5.87874 12.056 7.57895 14.2105 7.57895C16.3651 7.57895 18.1184 5.87874 18.1184 3.78947C18.1184 1.70021 16.3651 0 14.2105 0C12.056 0 10.3026 1.70021 10.3026 3.78947ZM22.0263 16V15.1579C22.0263 11.9082 19.2986 9.26316 15.9474 9.26316H12.4737C9.12158 9.26316 6.39474 11.9082 6.39474 15.1579V16H22.0263Z" fill="#5B5B5B"/>
                                        <path d="M3.85428 7.16927L1.64064 8.09137C1.5386 8.13277 1.43138 8.04809 1.43657 7.92953L1.55763 5.35332C1.55935 5.3138 1.54725 5.27428 1.52477 5.24229L0.0340144 3.23627C-0.0351621 3.14406 0.00634378 3.00668 0.111838 2.97469L2.40158 2.30476C2.4379 2.29347 2.46902 2.26901 2.48805 2.23514L3.78165 0.0748025C3.84045 -0.0249342 3.97534 -0.0249342 4.03414 0.0748025L5.32774 2.23702C5.34849 2.27089 5.37962 2.29535 5.41421 2.30664L7.70395 2.97657C7.80945 3.00668 7.85095 3.14594 7.78177 3.23815L6.29275 5.24417C6.27027 5.27616 6.25816 5.31568 6.25989 5.3552L6.38095 7.93141C6.38614 8.04997 6.27892 8.13465 6.17688 8.09325L3.96324 7.17116C3.92692 7.1561 3.88887 7.1561 3.85428 7.16927Z" fill="#5B5B5B"/>
                                        <path d="M7.14396 1.28828L6.57439 0.697554C6.55771 0.680265 6.53549 0.673061 6.51326 0.675942C6.49103 0.678824 6.4702 0.693232 6.45908 0.713403L5.87145 1.91359C5.85478 1.94385 5.86034 1.97987 5.88395 2.00436C5.89785 2.01877 5.91729 2.02597 5.93535 2.02597C5.94786 2.02597 5.96036 2.02309 5.97147 2.01589L7.12729 1.40787C7.14673 1.39634 7.16063 1.37617 7.16341 1.35168C7.16757 1.32863 7.15924 1.30557 7.14396 1.28828Z" fill="#5B5B5B"/>
                                        <path d="M1.94494 1.91227L1.35745 0.713362C1.34634 0.693213 1.3269 0.67882 1.30329 0.675941C1.28107 0.673063 1.25746 0.680259 1.24218 0.697531L0.672744 1.28763C0.656078 1.3049 0.649133 1.32793 0.651911 1.35096C0.654689 1.37399 0.668577 1.39557 0.688021 1.40709L1.84495 2.0159C1.85606 2.0231 1.86856 2.02597 1.88106 2.02597C1.9005 2.02597 1.91856 2.01878 1.93244 2.00438C1.95606 1.97848 1.96022 1.94106 1.94494 1.91227Z" fill="#5B5B5B"/>
                                        <path d="M4.55475 9.31595L4.00332 7.50602C3.99952 7.48768 3.99001 7.47137 3.9786 7.45914C3.95959 7.43876 3.93487 7.42857 3.90825 7.42857C3.86261 7.42857 3.82458 7.46118 3.81127 7.50806L3.25984 9.31799C3.25223 9.3506 3.25794 9.38525 3.27695 9.41174C3.29597 9.43824 3.32449 9.45455 3.35681 9.45455H4.45778C4.4882 9.45455 4.51863 9.43824 4.53764 9.41174C4.55856 9.38321 4.56426 9.34856 4.55475 9.31595Z" fill="#5B5B5B"/>
                                        <path d="M23.3986 8.79961L21.3862 9.65077C21.2935 9.68899 21.196 9.61082 21.2007 9.50139L21.3108 7.12334C21.3123 7.08686 21.3013 7.05038 21.2809 7.02085L19.9257 5.16914C19.8628 5.08402 19.9005 4.95722 19.9964 4.92769L22.078 4.30929C22.111 4.29887 22.1393 4.27629 22.1566 4.24502L23.3326 2.25087C23.3861 2.1588 23.5087 2.1588 23.5621 2.25087L24.7381 4.24676C24.757 4.27802 24.7853 4.30061 24.8167 4.31103L26.8983 4.92942C26.9942 4.95722 27.032 5.08576 26.9691 5.17088L25.6154 7.02259C25.595 7.05212 25.584 7.0886 25.5855 7.12508L25.6956 9.50312C25.7003 9.61256 25.6028 9.69073 25.5101 9.65251L23.4977 8.80135C23.4647 8.78745 23.4301 8.78745 23.3986 8.79961Z" fill="#5B5B5B"/>
                                        <path d="M26.3892 3.371L25.8714 2.82571C25.8563 2.80975 25.8361 2.8031 25.8159 2.80576C25.7957 2.80842 25.7767 2.82172 25.7666 2.84034L25.2324 3.94821C25.2173 3.97614 25.2223 4.00939 25.2438 4.032C25.2564 4.0453 25.2741 4.05195 25.2905 4.05195C25.3019 4.05195 25.3132 4.04929 25.3233 4.04264L26.3741 3.48139C26.3918 3.47075 26.4044 3.45213 26.4069 3.42952C26.4107 3.40824 26.4031 3.38696 26.3892 3.371Z" fill="#5B5B5B"/>
                                        <path d="M21.6629 3.94699L21.1288 2.84031C21.1187 2.82171 21.101 2.80842 21.0795 2.80576C21.0593 2.80311 21.0379 2.80975 21.024 2.82569L20.5063 3.3704C20.4912 3.38634 20.4849 3.4076 20.4874 3.42886C20.4899 3.45011 20.5025 3.47004 20.5202 3.48067L21.572 4.04265C21.5821 4.04929 21.5934 4.05195 21.6048 4.05195C21.6225 4.05195 21.6389 4.04531 21.6515 4.03202C21.673 4.00811 21.6768 3.97356 21.6629 3.94699Z" fill="#5B5B5B"/>
                                        <path d="M24.0354 10.7812L23.5341 9.11046C23.5307 9.09352 23.522 9.07847 23.5116 9.06718C23.4944 9.04837 23.4719 9.03896 23.4477 9.03896C23.4062 9.03896 23.3716 9.06906 23.3595 9.11234L22.8582 10.783C22.8513 10.8131 22.8565 10.8451 22.8738 10.8696C22.8911 10.894 22.917 10.9091 22.9464 10.9091H23.9473C23.9749 10.9091 24.0026 10.894 24.0199 10.8696C24.0389 10.8432 24.0441 10.8113 24.0354 10.7812Z" fill="#5B5B5B"/>
                                    </svg>
                                    <span className={styles.tooltiptext}>KOL Management</span>
                                </a>
                            </Link>
                            <Link href="/admin">
                                <a className={`${page === 'Request Box' && styles.active} ${styles.nav_icon}`}>
                                    <svg width="28" height="20" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M6.27132 0.237402C5.97889 0.393262 5.72205 0.62002 5.51946 0.900781L0.20179 8.27197C0.197562 8.27725 0.193334 8.28262 0.189106 8.28799C0.184526 8.29414 0.180298 8.2998 0.175717 8.30615C0.113356 8.38623 0.0657914 8.4792 0.0358436 8.57979C0.00554354 8.68262 -0.00573092 8.79121 0.00272492 8.89902C0.0090668 8.97891 0.0259785 9.05713 0.0531076 9.13105L0.589701 13.8976C0.655234 14.4782 0.909966 15.0123 1.30563 15.3995C1.55719 15.6455 1.85455 15.8214 2.17341 15.917C2.35627 15.9718 2.54617 16.0001 2.73854 16H20.394C20.9218 16.0002 21.4312 15.7867 21.8273 15.3995C22.2229 15.0123 22.4773 14.4782 22.5428 13.8976L23.1055 8.89922C23.1182 8.78662 23.1094 8.67246 23.0791 8.56406C23.0488 8.45566 22.9984 8.35566 22.9307 8.27061L17.6131 0.900781C17.4105 0.62002 17.1533 0.393262 16.8612 0.237402C16.5688 0.0814453 16.2489 0.000292969 15.9244 0H7.20781C6.99359 0.000195313 6.78114 0.0356445 6.57714 0.104688C6.4725 0.140137 6.37033 0.184473 6.27132 0.237402ZM20.8894 8L16.4874 1.90078C16.4197 1.80713 16.3341 1.73145 16.2369 1.67939C16.1393 1.62725 16.0325 1.6002 15.9244 1.6H7.20781C7.16024 1.6001 7.11303 1.60537 7.06652 1.61572C7.00769 1.62891 6.95026 1.6502 6.89565 1.67939C6.7984 1.73145 6.71279 1.80713 6.64514 1.90078L2.24317 8H7.95862C8.14993 8 8.33349 8.08428 8.46878 8.23428C8.53855 8.31182 8.5928 8.40352 8.62874 8.50332C8.66256 8.59678 8.68018 8.69736 8.68018 8.8C8.68018 10.1248 9.58214 12 11.5664 12C13.5507 12 14.4527 10.1248 14.4527 8.8C14.4527 8.58779 14.5285 8.38438 14.6637 8.23428C14.7994 8.08428 14.9826 8 15.1743 8H20.8894Z" fill="#5B5B5B"/>
                                    </svg>
                                    <span className={styles.tooltiptext}>Request Box</span>
                                </a>
                            </Link>
                            <Link href="/admin">
                                <a className={`${page === 'User Management' && styles.active} ${styles.nav_icon}`}>
                                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 3.78947C4 5.87874 5.79467 7.57895 8 7.57895C10.2053 7.57895 12 5.87874 12 3.78947C12 1.70021 10.2053 0 8 0C5.79467 0 4 1.70021 4 3.78947ZM15.1111 16H16V15.1579C16 11.9082 13.208 9.26316 9.77778 9.26316H6.22222C2.79111 9.26316 0 11.9082 0 15.1579V16H15.1111Z" fill="#5B5B5B"/>
                                    </svg>
                                    <span className={styles.tooltiptext}>User Management</span>
                                </a>
                            </Link>
                            <Link href="/admin">
                                <a className={`${page === 'Web CMS' && styles.active} ${styles.nav_icon}`}>
                                    <svg width="24" height="20" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.84 0H1.76C0.792 0 0.00879999 0.9 0.00879999 2L0 14C0 15.1 0.792 16 1.76 16H15.84C16.808 16 17.6 15.1 17.6 14V2C17.6 0.9 16.808 0 15.84 0ZM1.76 5H11V8.5H1.76V5ZM1.76 10.5H11V14H1.76V10.5ZM15.84 14H12.76V5H15.84V14Z" fill="#5B5B5B"/>
                                    </svg>
                                    <span className={styles.tooltiptext}>Web Content</span>
                                </a>
                            </Link>
                            <Link href="/admin">
                                <a className={`${page === 'Commission Settings' && styles.active} ${styles.nav_icon}`}>
                                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 16C3.5816 16 0 12.4184 0 8C0 3.5816 3.5816 0 8 0C12.4184 0 16 3.5816 16 8C16 12.4184 12.4184 16 8 16ZM5.2 9.6V11.2H7.2V12.8H8.8V11.2H9.6C10.1304 11.2 10.6391 10.9893 11.0142 10.6142C11.3893 10.2391 11.6 9.73043 11.6 9.2C11.6 8.66957 11.3893 8.16086 11.0142 7.78579C10.6391 7.41071 10.1304 7.2 9.6 7.2H6.4C6.29391 7.2 6.19217 7.15786 6.11716 7.08284C6.04214 7.00783 6 6.90609 6 6.8C6 6.69391 6.04214 6.59217 6.11716 6.51716C6.19217 6.44214 6.29391 6.4 6.4 6.4H10.8V4.8H8.8V3.2H7.2V4.8H6.4C5.86957 4.8 5.36086 5.01071 4.98579 5.38579C4.61071 5.76086 4.4 6.26957 4.4 6.8C4.4 7.33043 4.61071 7.83914 4.98579 8.21421C5.36086 8.58929 5.86957 8.8 6.4 8.8H9.6C9.70609 8.8 9.80783 8.84214 9.88284 8.91716C9.95786 8.99217 10 9.09391 10 9.2C10 9.30609 9.95786 9.40783 9.88284 9.48284C9.80783 9.55786 9.70609 9.6 9.6 9.6H5.2Z" fill="#5B5B5B"/>
                                    </svg>
                                    <span className={styles.tooltiptext}>Commission Settings</span>
                                </a>
                            </Link>
                        </div>
                        <div className="border-t-2 border-gray-500 text-2xl w-2/3 flex justify-center">
                            <Link href="/admin">
                                <a className={`${page === 'Settings' && styles.active} ${styles.nav_icon}`}>
                                    <svg width="26" height="20" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.91111 3.78947C3.91111 5.87874 5.6659 7.57895 7.82222 7.57895C9.97855 7.57895 11.7333 5.87874 11.7333 3.78947C11.7333 1.70021 9.97855 0 7.82222 0C5.6659 0 3.91111 1.70021 3.91111 3.78947ZM15.6444 16V15.1579C15.6444 11.9082 12.9145 9.26316 9.56049 9.26316H6.08395C2.72909 9.26316 0 11.9082 0 15.1579V16H15.6444Z" fill="#5B5B5B"/>
                                        <path d="M17.4237 3.90269C17.1477 3.90269 16.8893 4.01583 16.6936 4.22262C16.4989 4.4294 16.3909 4.70252 16.3909 4.99416C16.3909 5.2858 16.4989 5.55892 16.6936 5.7657C16.8893 5.97151 17.1477 6.08563 17.4237 6.08563C17.6997 6.08563 17.9582 5.97151 18.1538 5.7657C18.3486 5.55892 18.4566 5.2858 18.4566 4.99416C18.4566 4.70252 18.3486 4.4294 18.1538 4.22262C18.0583 4.12084 17.9445 4.04015 17.8192 3.98523C17.6938 3.93031 17.5594 3.90225 17.4237 3.90269ZM21.2293 6.19975L20.6257 5.65451C20.6543 5.46918 20.6691 5.27995 20.6691 5.0917C20.6691 4.90345 20.6543 4.71324 20.6257 4.52889L21.2293 3.98365C21.2749 3.94239 21.3076 3.88745 21.3229 3.82612C21.3383 3.76479 21.3356 3.69998 21.3152 3.6403L21.3069 3.61494C21.1408 3.12402 20.8918 2.66896 20.5722 2.27182L20.5555 2.25134C20.5167 2.2031 20.465 2.16843 20.4072 2.15189C20.3493 2.13535 20.2881 2.13771 20.2316 2.15867L19.4821 2.44056C19.2052 2.20061 18.8969 2.01139 18.5627 1.87971L18.4178 1.05159C18.4069 0.989209 18.3783 0.931817 18.3357 0.887041C18.2932 0.842266 18.2388 0.812227 18.1797 0.800915L18.1548 0.796038C17.6748 0.704351 17.169 0.704351 16.689 0.796038L16.6641 0.800915C16.605 0.812227 16.5506 0.842266 16.508 0.887041C16.4655 0.931817 16.4369 0.989209 16.4259 1.05159L16.2801 1.88361C15.9491 2.01634 15.6408 2.20511 15.3672 2.44251L14.6122 2.15867C14.5557 2.13755 14.4944 2.1351 14.4365 2.15165C14.3787 2.1682 14.3269 2.20297 14.2882 2.25134L14.2716 2.27182C13.9525 2.66938 13.7036 3.12433 13.5369 3.61494L13.5286 3.6403C13.487 3.76223 13.5212 3.89879 13.6144 3.98365L14.2254 4.53475C14.1968 4.71812 14.183 4.9054 14.183 5.09072C14.183 5.278 14.1968 5.46528 14.2254 5.6467L13.6163 6.1978C13.5707 6.23906 13.538 6.294 13.5227 6.35533C13.5073 6.41666 13.51 6.48147 13.5304 6.54114L13.5387 6.5665C13.7058 7.05713 13.9522 7.51069 14.2734 7.90963L14.2901 7.93011C14.3289 7.97834 14.3806 8.01302 14.4384 8.02956C14.4963 8.0461 14.5575 8.04374 14.614 8.02278L15.3691 7.73894C15.6441 7.97791 15.9506 8.16714 16.2819 8.29784L16.4278 9.12986C16.4387 9.19224 16.4674 9.24963 16.5099 9.29441C16.5524 9.33918 16.6068 9.36922 16.6659 9.38053L16.6908 9.38541C17.1755 9.47759 17.6719 9.47759 18.1566 9.38541L18.1815 9.38053C18.2406 9.36922 18.295 9.33918 18.3376 9.29441C18.3801 9.24963 18.4087 9.19224 18.4197 9.12986L18.5646 8.30174C18.8987 8.16909 19.207 7.98083 19.4839 7.74089L20.2334 8.02278C20.2899 8.0439 20.3512 8.04635 20.4091 8.0298C20.4669 8.01325 20.5187 7.97848 20.5574 7.93011L20.574 7.90963C20.8952 7.50874 21.1417 7.05713 21.3087 6.5665L21.317 6.54114C21.3567 6.42019 21.3226 6.28461 21.2293 6.19975ZM17.4237 6.70891C16.5275 6.70891 15.8011 5.94127 15.8011 4.99416C15.8011 4.04705 16.5275 3.27941 17.4237 3.27941C18.32 3.27941 19.0464 4.04705 19.0464 4.99416C19.0464 5.94127 18.32 6.70891 17.4237 6.70891Z" fill="#5B5B5B"/>
                                    </svg>
                                    <span className={styles.tooltiptext}>Settings</span>
                                </a>
                            </Link>
                        </div>
                    </div>
                    
                    <div className={`${show && styles.expand} ${styles.sidebar_sub}`}>
                        <button className={`${styles.link} ${styles.active} `}>Sub Section 1</button>
                        <button className={styles.link}>Sub Section 2</button>
                        <button className={styles.link}>Sub Section 3</button>
                    </div>
                    <div className={`${show && styles.expand} ${styles.sidebar_lg}`}>
                        <div className="text-white text-extrabold text-xl pb-10">{page}</div>
                        <Link href="/admin"><a className={router.pathname === '/admin' && styles.active}>
                            Sub Section 1
                        </a></Link>
                        <Link href="/admin"><a>
                            Sub Section 2
                            <span className={styles.sbullet}>1</span>
                        </a></Link>
                        <Link href="/admin"><a>
                            Sub Section 3
                        </a></Link>
                    </div>

                    <button onClick={() => setShow(!show)} className={`${show && styles.active} ${styles.shadow}`}></button>
                    
                    <header className={styles.header}>
                        <div className={styles.small_span}></div>
                        <button className={styles.header_icon} onClick={() => setShow(!show)}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0H4.8V4.57143H0V0Z" fill="white"/>
                                <path d="M0 5.71429H4.8V10.2857H0V5.71429Z" fill="white"/>
                                <path d="M0 11.4286H4.8V16H0V11.4286Z" fill="white"/>
                                <path d="M5.6 0H10.4V4.57143H5.6V0Z" fill="white"/>
                                <path d="M5.6 5.71429H10.4V10.2857H5.6V5.71429Z" fill="white"/>
                                <path d="M5.6 11.4286H10.4V16H5.6V11.4286Z" fill="white"/>
                                <path d="M11.2 0H16V4.57143H11.2V0Z" fill="white"/>
                                <path d="M11.2 5.71429H16V10.2857H11.2V5.71429Z" fill="white"/>
                                <path d="M11.2 11.4286H16V16H11.2V11.4286Z" fill="white"/>
                            </svg>
                        </button>
                        <h1>title</h1>
                    </header>

                    <main className={`p-5 md:p-8 lg:p-10 text-white min-h-screen w-full ${styles.main_bg}`}>
                        {children}
                    </main>
                </div>
            </ProtectRoute>
        </AuthProvider>
    )
}