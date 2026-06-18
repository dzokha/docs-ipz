/**
 * Hàm Helper tự động sinh link có chứa mã theo dõi UTM
 * @param url Đường dẫn gốc (Tuyệt đối hoặc Tương đối)
 * @param source Nguồn truy cập (Ví dụ: docs_menu, footer, sidebar)
 * @param medium Kênh tiếp cận (Ví dụ: navbar, cta_button, blog_post)
 * @param campaign Tên chiến dịch nếu có (Ví dụ: smes_protection)
 */
// Định nghĩa sẵn các nguồn để tránh gõ sai
export const UTM_SOURCES = {
  DOCS_SITE: 'docs_site',
  MAIN_SITE: 'main_site'
};

export const UTM_MEDIUMS = {
  NAVBAR: 'navbar',
  FOOTER: 'footer',
  HERO_CTA: 'hero_cta',
  CYBER_INTRO: 'cyber_intro',
  BIO_INTRO: 'bio_intro'
};

export function getUtmLink(
  url: string, 
  source: string, 
  medium?: string, 
  campaign?: string
): string {
  if (!url) return '';

  // Sử dụng URLSearchParams để tự động hóa việc encode ký tự đặc biệt và nối chuỗi
  const params = new URLSearchParams();
  params.set('utm_source', source);
  
  if (medium) params.set('utm_medium', medium);
  if (campaign) params.set('utm_campaign', campaign);

  // Kiểm tra xem URL gốc đã có dấu "?" chưa để nối bằng "?" hoặc "&"
  const separator = url.includes('?') ? '&' : '?';
  
  return `${url}${separator}${params.toString()}`;
}